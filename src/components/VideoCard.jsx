import { truncateStr, getDateDiff } from "../utils/helpingFunctions";

const VideoCard = ({cardData}) => {
    const {title, channelTitle, publishedAt} = cardData.snippet;
    const {viewCount} = cardData.statistics;
    const thumbnails = cardData.snippet.thumbnails;
    
    const url = thumbnails?.maxres?.url || thumbnails?.standard?.url || thumbnails?.high?.url || thumbnails?.medium?.url || thumbnails?.default?.url;

    const dateDiff = getDateDiff(publishedAt);

    return (
        <div>
            <div>
                <img className="rounded-xl" src={url} />
            </div>
            <div className="mt-[15px]">
                <h1 className="text-[1.2rem] font-semibold">{truncateStr(title)}</h1>
                <h2 className="mt-[5px] text-gray-500">{channelTitle}</h2>
                <div className="flex gap-[10px] mt-[6px]">
                    <span className="text-gray-500">{dateDiff}</span>
                    <span className="text-gray-500">{`${(+viewCount).toLocaleString()} Views`}</span>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;