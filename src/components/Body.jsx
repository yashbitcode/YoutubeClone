import Button from "./Button";
import VideoCont from "./VideoCont";

const Body = () => {
    return (    
        <div className="px-[1rem]">
            <div className="flex gap-[15px] overflow-x-scroll mt-[2rem] [&::-webkit-scrollbar]:h-[0px]">
                <Button tag={"All"} />
                <Button tag={"Music"} />
                <Button tag={"Popular"} />
                <Button tag={"Games"} />
                <Button tag={"LoFi"} />
                <Button tag={"Stream"} />
                <Button tag={"Computer Science"} />
                <Button tag={"All"} />
                <Button tag={"Music"} />
                <Button tag={"Popular"} />
                <Button tag={"Games"} />
                <Button tag={"LoFi"} />
                <Button tag={"Stream"} />
                <Button tag={"Computer Science"} />
            </div>
            <VideoCont />
        </div>
    );
};

export default Body;