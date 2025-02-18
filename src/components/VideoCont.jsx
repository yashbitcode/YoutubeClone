import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoCont = ({category}) => {
    const [popularVideos, setPopularVideos] = useState([]);

    let url = category ? `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=${category}&regionCode=IN&maxResults=50&key=${import.meta.env.VITE_GOOGLE_API_KEY}` : `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${import.meta.env.VITE_GOOGLE_API_KEY}`;

    useEffect(() => {
        fetchPopularVideos();
    }, [category]);

    const fetchPopularVideos = async () => {
        const response = await fetch(url);
        const data = await response.json();
        
        setPopularVideos(data.items);
    };

    return (
        <div className="grid grid-cols-3 gap-x-[20px] gap-y-[25px] mt-[2rem]">
            {
                popularVideos.map((el) => (
                    <Link to={`watch/${el.id}`} key={el.id}>
                        <VideoCard cardData={el} />
                    </Link>
                ))
            }
        </div>
    );
};

export default VideoCont;