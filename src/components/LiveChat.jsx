import { useSelector } from "react-redux";
import useLiveChat from "../utils/useLiveChat";
import LiveChatMsg from "./LiveChatMsg";

const LiveChat = ({videoId}) => {
    const liveMessages = useSelector((store) => store.liveChat.messages);
    useLiveChat(videoId);

    return (
        liveMessages.length ? (
            <div className="w-2/5 flex border-[1.5px] rounded-xl p-[8px] h-[450px] flex-col-reverse gap-[10px] overflow-y-scroll bg-gray-50">
                {
                    liveMessages.map((el, idx) => <LiveChatMsg key={idx} profile={el?.authorDetails?.profileImageUrl} author={el?.authorDetails?.displayName} msg={el?.snippet?.displayMessage} />)
                }
            </div>
        ) : null
    );
};

export default LiveChat;