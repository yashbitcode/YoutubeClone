const LiveChatMsg = ({profile, author, msg}) => {
    return (
        <div className="flex gap-[15px] items-center shadow-[0_1px_3px_rgba(0,0,0,0.12),_0_1px_2px_rgba(0,0,0,0.24)] p-[8px] rounded-xl">
            <div className="w-full max-w-[25px] rounded-[50%] overflow-hidden">
                <img className="w-full" src={profile} alt="profile" />
            </div>
            <div>
                <h1 className="font-semibold text-[14px]">{author}</h1>
                <p className="text-[12px]">{msg}</p>
            </div>
        </div>
    );
};

export default LiveChatMsg;