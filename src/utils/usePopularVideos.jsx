import { useState, useEffect, useRef } from "react";

const usePopularVideos = (category) => {
    const [popularVideos, setPopularVideos] = useState([]);
    const pageToken = useRef(null);

    let url = category ? `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=${category}&regionCode=IN&maxResults=50&pageToken=${pageToken.current ? pageToken.current : ""}&key=${import.meta.env.VITE_GOOGLE_API_KEY}` : `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&pageToken=${pageToken.current ? pageToken.current : ""}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`;

    useEffect(() => {
        fetchPopularVideos();
    }, [category]);

    const fetchPopularVideos = async () => {
        const response = await fetch(url);
        const data = await response.json();
        
        setPopularVideos(data.items);
        pageToken.current = data.nextPageToken;
    };

    return [popularVideos];
};

export default usePopularVideos;