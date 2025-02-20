import usePopularVideos from "../utils/usePopularVideos";
import VideoCard, { SpecificVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoCont = ({category}) => {
    const [popularVideos] = usePopularVideos(category);
    const UpdatedCard = SpecificVideoCard(VideoCard);

    return (
        <div className="grid grid-cols-3 gap-x-[20px] gap-y-[25px] mt-[2rem]">
            {
                popularVideos.map((el) => (
                    <Link to={`watch/${el.id}`} key={el.id}>
                        {
                            (el.snippet.liveBroadcastContent === "none") ? <VideoCard cardData={el} /> : <UpdatedCard cardData={el} />
                        }
                    </Link>
                ))
            }
        </div>
    );
};

export default VideoCont;