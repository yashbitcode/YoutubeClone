import { SEARCH_ICON, YOUTUBE_LOGO, MENU_ICON } from "../utils/constants";

const Header = () => {
    return (
        <div className="flex items-center gap-[20px] justify-between px-[15px] mt-[1rem]">
            <button className="cursor-pointer">
                <img className="w-[40px]" src={MENU_ICON} />
            </button>

            <div className="w-[180px]">
                <img className="w-full" src={YOUTUBE_LOGO} />
            </div>

            <div className="flex w-full justify-center">
                <input type="text" className="py-[8px] outline-0 text-[1.3rem] w-full max-w-[700px] rounded-l-[40px] px-[20px] border" />
                <button className="py-[10px] rounded-r-[40px] px-[15px] border cursor-pointer">
                    <img className="w-[30px]" src={SEARCH_ICON} />
                </button>
            </div>

            <div className="border py-[7px] px-[20px] rounded-[50%]">
                <span className="text-[1.7rem]">Y</span>
            </div>
        </div>
    );
};

export default Header;