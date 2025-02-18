import useVideoComments from "../utils/useVideoComments";

const GetComment = ({commentId, comment, author, profile, replies, videoId}) => {
    const allComment = useVideoComments(videoId, commentId, replies);

    return (
        <div className="pl-[2rem]">
            <div className="flex items-center gap-[15px] mb-[0.4rem] bg-gray-50 p-[8px] rounded-[10px]">
                <div className=" w-[35px] rounded-[50%] overflow-hidden">
                    <img className="w-full" src={profile} />
                </div>
                <div className="w-[calc(100%-35px)]">
                    <h2 className="font-semibold text-[15px]">{author}</h2>
                    <p className="text-[14px]">{comment}</p>
                </div>
            </div>
            {
                allComment && allComment.map((el, idx) => {
                    const topLevel = el.snippet;
                        
                    const commentText = topLevel.textOriginal;
                    const author = topLevel.authorDisplayName;
                    const profile = topLevel.authorProfileImageUrl;

                    return <GetComment key={idx} comment={commentText} author={author} profile={profile} />
                })
            }
        </div>
    );
};

export default GetComment;