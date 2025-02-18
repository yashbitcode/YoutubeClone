import useVideoCategories from "../utils/useVideoCategories";
import VideoCont from "./VideoCont";

const Body = () => {
    const [selectedCategory, setSelectedCategory, allCategories] = useVideoCategories();

    return (    
        <div className="px-[1rem]">
            <div className="flex gap-[15px] overflow-x-scroll mt-[2rem] [&::-webkit-scrollbar]:h-[0px]">
                <button className={`w-fit text-nowrap px-[20px] py-[5px] text-[1.2rem] rounded-[10px] ${selectedCategory === null ? "bg-black text-white" : "bg-gray-200 text-black"}`} onClick={() => setSelectedCategory(null)}>All</button>
                {
                    allCategories.map((el) => {
                        return el.snippet.assignable && (
                            <button key={el.etag} className={`w-fit text-nowrap px-[20px] py-[5px] text-[1.2rem] rounded-[10px] ${el.id === selectedCategory ? "bg-black text-white" : "bg-gray-200 text-black"}`} onClick={() => setSelectedCategory(el.id)}>{el.snippet.title}</button>
                        );
                    })
                }
            </div>
            <VideoCont category={selectedCategory} />
        </div>
    );
};

export default Body;