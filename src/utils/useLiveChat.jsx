import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addLiveMsg } from "../utils/LiveChatSlice";

const useLiveChat = (videoId) => {
    const dispatch = useDispatch();

    let intervalId;
    let pageToken;

    const fetchLiveChatMsg = async (liveChatId) => {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/liveChat/messages?pageToken=${pageToken ? pageToken : ""}&liveChatId=${liveChatId}&part=snippet,authorDetails&key=${import.meta.env.VITE_GOOGLE_API_KEY}&maxResults=1`);

        const data = (await response.json());

        pageToken = data.nextPageToken;
        console.log(data);
        dispatch(addLiveMsg(data?.items[0]));
    };

    const fetchLiveId = async () => {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${videoId}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`);
        
        const liveChatId = (await response.json())?.items[0]?.liveStreamingDetails?.activeLiveChatId;
        
        if(liveChatId) {
            if(intervalId) clearInterval(intervalId);

            intervalId = setInterval(() => {
                fetchLiveChatMsg(liveChatId);
            }, 3000);
        }
    };

    useEffect(() => {
        // fetchLiveId();

        return () => {
            console.log(intervalId);
            clearInterval(intervalId);
        }
    }, []);
};

export default useLiveChat;

