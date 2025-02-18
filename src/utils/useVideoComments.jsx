import { useEffect, useState } from "react";

const useVideoComments = (videoId, parentId, replies = true) => {
    const [allComments, setAllComments] = useState([]);

    const url = !parentId ? `https://www.googleapis.com/youtube/v3/commentThreads?key=${import.meta.env.VITE_GOOGLE_API_KEY}&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=50` : `https://www.googleapis.com/youtube/v3/comments?part=snippet&parentId=${parentId}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`;
    
    const fetchVideoComments = async () => {
        const response = await fetch(url);

        const data = (await response.json()).items;
        
        setAllComments(data);
    }

    useEffect(() => {
        if(replies && videoId) fetchVideoComments();
    }, []);

    return allComments;
};

export default useVideoComments;