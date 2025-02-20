import { CROSS_ICON } from "../utils/constants";
const SideBar = ({setShow}) => {
    return (
        <div className="px-[1rem] py-[1.7rem] shadow-2xl bg-white h-[100vh] w-[300px] absolute z-[10]">
            <button className="cursor-pointer" onClick={() => setShow(false)}>
                <img className="w-[35px]" src={CROSS_ICON} />
            </button>

            <ul className="flex flex-col gap-[10px] mt-[2rem]">
                <li className="text-2xl">Home</li>
                <li className="text-2xl">Shorts</li>
                <li className="text-2xl">Subscriptions</li>
                <li className="h-[2px] my-[5px] bg-black"></li>
                <li className="text-2xl">History</li>
                <li className="text-2xl">Playlist</li>
                <li className="text-2xl">Watch</li>
                <li className="text-2xl">Later Video</li>
            </ul>
        </div>
    );
};

export default SideBar;  