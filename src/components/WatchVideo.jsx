import useSpecificVideo from "../utils/useSpecificVideo";
import { useParams } from "react-router-dom";
import { LIKE_ICON } from "../utils/constants";
import { getDateDiff } from "../utils/helpingFunctions";
import CommentsCont from "./CommentsCont";
import LiveChat from "./LiveChat";

const WatchVideo = () => {
    const {watchId} = useParams();
    const [videoInfo, hide, setHide] = useSpecificVideo(watchId);

    if(!videoInfo.length) return;

    const {title, description, channelTitle, publishedAt} = videoInfo[0].snippet;
    const {likeCount, viewCount} = videoInfo[0].statistics;

    return (
        <div className="py-[2rem] px-[1.2rem] flex gap-[15px]">
            <div className="w-3/5">
                <iframe className="w-full aspect-video rounded-xl"  src={`https://www.youtube.com/embed/${watchId}?mute=1&si=q3iEamUx0xYGxZY3`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                <div className="mt-[1rem]">
                    <p className="text-[20px] font-semibold">{title}</p>

                    <div className="flex justify-between mt-[6px]">
                        <h1 className="text-xl font-bold">{channelTitle}</h1>
                        <div className="flex items-center gap-[5px]">
                            <img src={LIKE_ICON} className="w-[30px]" />
                            <span className="pt-[3px]">{(+likeCount).toLocaleString()}</span>
                        </div>
                    </div>

                    <div className={`mt-[0.7rem] overflow-hidden ${!hide ? "h-fit" : "h-[96px]"} bg-gray-200 p-[1rem] rounded-xl`}>
                        <div className="flex gap-[20px]">
                            <span className="text-[1.1rem] font-semibold">{`${(+viewCount).toLocaleString()} Views`}</span>
                            <span className="text-[1.1rem] font-semibold">{getDateDiff(publishedAt)}</span>
                        </div>
                        <p>{description}</p>
                    </div>
                    <button className="mt-[10px] text-[1.1rem] bg-gray-400 py-[5px] px-[10px] rounded-[7px]" onClick={() => setHide(!hide)}>
                        {
                            hide ? "View More" : "View Less"
                        }
                    </button>
                </div>

                <CommentsCont videoId={watchId} />
                
            </div>

            <LiveChat videoId={watchId} />
        </div>
    );
};

export default WatchVideo;