const UserSearchCard = ({cardData}) => {    
    const {thumbnails, title, channelTitle} = cardData.snippet;
    const url = thumbnails?.high?.url || thumbnails?.medium?.url || thumbnails?.default?.url;

    return (
        <div className="flex items-center mx-[2rem] mt-[1rem] gap-[20px]">
            <div className="w-full max-w-[450px] rounded-xl overflow-hidden">  
                <img className="w-full" src={url} />
            </div>
            <div>
                <h1 className="text-2xl font-semibold">{channelTitle}</h1>
                <p className="text-xl">{title}</p>
            </div>
        </div>
    );
}; 

export default UserSearchCard;