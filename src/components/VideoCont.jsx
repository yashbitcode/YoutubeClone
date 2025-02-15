import { useEffect } from "react";

const VideoCont = () => {
    useEffect(() => {
        fetchPopularVideos();
    }, []);

    const fetchPopularVideos = async () => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key=${import.meta.env.VITE_GOOGLE_API_KEY}`);
        const data = await response.json();

        console.log(data);
    };

    return (
        <div>
            fetch
        </div>
    );
};

export default VideoCont;