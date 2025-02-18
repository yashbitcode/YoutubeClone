import { useState, useEffect } from "react";

const useVideoCategories = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [allCategories, setAllCategories] = useState([]);

    const fetchCategories = async () => {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videoCategories?key=${import.meta.env.VITE_GOOGLE_API_KEY}&part=snippet&regionCode=in`);
        const data = (await response.json()).items;

        setAllCategories(data);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return [selectedCategory, setSelectedCategory, allCategories];
};

export default useVideoCategories;