import { useEffect } from "react";
import LiveChatMsg from "./LiveChatMsg";
import { useDispatch, useSelector } from "react-redux";
import { addLiveMsg } from "../utils/LiveChatSlice";

const LiveChat = ({videoId}) => {
    const dispatch = useDispatch();
    const liveMessages = useSelector((store) => store.liveChat.messages);

    const fetchLiveChats = async () => {
        const res1 = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${videoId}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`);
        const liveChatId = (await res1.json())?.items[0]?.liveStreamingDetails?.activeLiveChatId;
        
        if(liveChatId) {
            // setInterval
        }
    }

    useEffect(() => {
        fetchLiveChats();
    }, []);

    return (
        liveMessages && <div className="w-2/5 flex border-[1.5px] rounded-xl p-[8px] h-[450px] flex-col-reverse gap-[10px] overflow-y-scroll bg-gray-50">
            {
                liveMessages.map((el) => <LiveChatMsg key={el.id} profile={el?.authorDetails?.profileImageUrl} author={el?.authorDetails?.displayName} msg={el?.snippet?.displayMessage} />)
            }
        </div>
    );
};

export default LiveChat;