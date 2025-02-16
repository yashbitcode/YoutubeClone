import { useState, useEffect } from "react";

const useSpecificVideo = (watchId) => {
    const [videoInfo, setVideoInfo] = useState([]);
    const [hide, setHide] = useState(true);

    const fetchIdSpecificInfo = async () => {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${watchId}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`);
        
        const result = await response.json();

        setVideoInfo(result.items);
    }; 

    useEffect(() => {
        fetchIdSpecificInfo();
    }, []);

    return [videoInfo, hide, setHide];
};

export default useSpecificVideo;