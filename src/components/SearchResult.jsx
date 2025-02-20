import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserSearchCard from "./UserSearchCard";
import { SpecificVideoCard } from "./VideoCard";

const SearchResult = () => {
    const {userSearch} = useParams();
    const [searchResults, setSearchResults] = useState([]);

    const UpdatedCard = SpecificVideoCard(UserSearchCard);

    const fetchUserSearchResults = async () => {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${userSearch}&key=${import.meta.env.VITE_GOOGLE_API_KEY}&maxResults=50`);

        const data = (await response.json()).items;
        
        setSearchResults(data);
    };

    useEffect(() => {
        fetchUserSearchResults();
    }, [userSearch]);

    return (
        <div className="flex flex-col gap-[15px] p-[15px]">
            {
                searchResults.map((el) => {
                    if(el.id.videoId) return (
                        <Link to={`/watch/${el.id.videoId}`} key={el.id.videoId}>
                            {
                                (el.snippet.liveBroadcastContent === "none") ? <UserSearchCard cardData={el} /> : <UpdatedCard cardData={el} />
                            }
                        </Link>
                    );
                    else return (                      
                        (el.snippet.liveBroadcastContent === "none") ? <UserSearchCard cardData={el} /> : <UpdatedCard cardData={el} />
                    );
                })
            }
        </div>
    );
};

export default SearchResult;