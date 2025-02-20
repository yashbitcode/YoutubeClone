import { useEffect, useRef } from "react";
import LiveChatMsg from "./LiveChatMsg";
import { useDispatch, useSelector } from "react-redux";
import { addLiveMsg } from "../utils/LiveChatSlice";

const LiveChat = ({videoId}) => {
    const dispatch = useDispatch();
    
    let intervalId;
    let pageToken;

    const liveMessages = useSelector((store) => store.liveChat.messages);

    const fetchLiveChatMsg = async (liveChatId) => {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/liveChat/messages?pageToken=${pageToken ? pageToken : ""}&liveChatId=${liveChatId}&part=snippet,authorDetails&key=${import.meta.env.VITE_GOOGLE_API_KEY}&maxResults=1`);

        const data = (await response.json());

        pageToken = data.nextPageToken;
        console.log(data);
        dispatch(addLiveMsg(data?.items[0]));
    }

    const fetchLiveId = async () => {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${videoId}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`);
        
        const liveChatId = (await response.json())?.items[0]?.liveStreamingDetails?.activeLiveChatId;
        
        if(liveChatId) {
            if(intervalId) clearInterval(intervalId);

            intervalId = setInterval(() => {
                fetchLiveChatMsg(liveChatId);
            }, 3000);
        }
    }

    useEffect(() => {
        fetchLiveId();

        return () => {
            console.log(intervalId);
            clearInterval(intervalId);
        }
    }, []);

    return (
        liveMessages && <div className="w-2/5 flex border-[1.5px] rounded-xl p-[8px] h-[450px] flex-col-reverse gap-[10px] overflow-y-scroll bg-gray-50">
            {
                liveMessages.map((el, idx) => <LiveChatMsg key={idx} profile={el?.authorDetails?.profileImageUrl} author={el?.authorDetails?.displayName} msg={el?.snippet?.displayMessage} />)
            }
        </div>
    );
};

export default LiveChat;