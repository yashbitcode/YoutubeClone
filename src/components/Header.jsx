import { useEffect, useState } from "react";
import { SEARCH_ICON, YOUTUBE_LOGO, MENU_ICON } from "../utils/constants";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { addSuggestion } from "../utils/searchCacheSlice";
import { Link, useParams } from "react-router-dom";

const Header = () => {
    const {userSearch} = useParams();

    const dispatch = useDispatch();
    const suggestions = useSelector((store) => store.searchSuggestion.suggestion);

    const [showSideBar, setShowSideBar] = useState(false);
    const [search, setSearch] = useState("");
    const [showSuggestion, setShowSuggestion] = useState(true);
    const [searchSuggestion, setSearchSuggestion] = useState([]);
    
    const handleSearchSuggestion = async () => {
        if(suggestions[search]) setSearchSuggestion(suggestions[search]);
        else {
            const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${search}`);
            const data = (await response.json())[1];

            dispatch(addSuggestion({search, data}));
            setSearchSuggestion(data);
        }   
    };

    useEffect(() => {
        if(userSearch) {
            setSearch(userSearch);
            setShowSuggestion(false);
        } 
    }, [userSearch]);

    useEffect(() => {
        const timerId = setTimeout(() => handleSearchSuggestion(), 200);

        return () => clearTimeout(timerId);
    }, [search]);

    return (
        <div>
            <div className="flex items-center gap-[20px] justify-between px-[20px] mt-[1rem]">
                <button className="cursor-pointer" onClick={() => setShowSideBar(true)}>
                    <img className="w-[40px]" src={MENU_ICON} />
                </button>

                <div className="w-[180px]">
                    <img className="w-full" src={YOUTUBE_LOGO} />
                </div>

                <div className="w-full">
                    <div className="mx-auto flex w-full max-w-1/2 relative justify-center">
                        
                        <input type="text" className="py-[8px] outline-0 text-[1.3rem] w-full border-gray-500 rounded-l-[40px] px-[20px] border" value={search} onChange={(e) => setSearch(e.target.value)} onFocus={() => setShowSuggestion(true)} onBlur={
                            () => {
                                setTimeout(() => setShowSuggestion(false), 250);
                            }
                        } />
                        
                        <Link to={`/result/${search}`}>
                            <button className="py-[10px] h-full border-gray-500 rounded-r-[40px] px-[15px] border cursor-pointer bg-gray-100">
                                <img className="w-[30px]" src={SEARCH_ICON} />
                            </button> 
                        </Link>       
                        {
                            (searchSuggestion.length && showSuggestion) ? (
                                <div className="w-[95%] top-[60px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.12),_0_1px_2px_rgba(0,0,0,0.24)] rounded-xl absolute">
                                    <ul className="flex flex-col gap-[5px] p-[12px]">
                                        {
                                            searchSuggestion.map((el, idx) => {
                                                return (
                                                    <Link key={idx} to={`/result/${el}`}>
                                                        <li onClick={() => {
                                                            setSearch(el);
                                                        }}>{el}</li>
                                                    </Link>
                                                );
                                            })
                                        }
                                    </ul>
                                </div> 
                            ) : null
                        }          
                    </div>
                </div>

                <div className="border py-[8px] px-[20px] rounded-[50%]">
                    <span className="text-[1.5rem]">Y</span>
                </div>
            </div>
            {
                showSideBar && (
                    <div className="fixed top-0">
                        <div className="absolute z-[-1] w-screen h-[100vh] bg-black opacity-[30%]"></div>
                        <SideBar setShow={setShowSideBar} />
                    </div>
                )
            }
        </div>
    );
};

export default Header;