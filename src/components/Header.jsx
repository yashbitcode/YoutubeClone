import { useState } from "react";
import { SEARCH_ICON, YOUTUBE_LOGO, MENU_ICON } from "../utils/constants";
import SideBar from "./SideBar";

const Header = () => {
    const [showSideBar, setShowSideBar] = useState(false);

    return (
        <div>
            <div className="flex items-center gap-[20px] justify-between px-[20px] mt-[1rem]">
                <button className="cursor-pointer" onClick={() => setShowSideBar(true)}>
                    <img className="w-[40px]" src={MENU_ICON} />
                </button>

                <div className="w-[180px]">
                    <img className="w-full" src={YOUTUBE_LOGO} />
                </div>

                <div className="flex w-full justify-center">
                    <input type="text" className="py-[8px] outline-0 text-[1.3rem] w-full max-w-1/2 border-gray-500 rounded-l-[40px] px-[20px] border" />
                    <button className="py-[10px] border-gray-500 rounded-r-[40px] px-[15px] border cursor-pointer bg-gray-100">
                        <img className="w-[30px]" src={SEARCH_ICON} />
                    </button>
                </div>

                <div className="border py-[7px] px-[20px] rounded-[50%]">
                    <span className="text-[1.7rem]">Y</span>
                </div>
            </div>
            {
                showSideBar && (
                    <div>
                        <div className="absolute top-0 w-full h-[100vh] bg-black opacity-[30%]"></div>
                        <SideBar setShow={setShowSideBar} />
                    </div>
                )
            }
        </div>
    );
};

export default Header;