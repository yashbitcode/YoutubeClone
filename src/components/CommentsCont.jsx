import useVideoComments from "../utils/useVideoComments";
import GetComment from "./GetComment";

const CommentsCont = ({videoId}) => {
    const allComments = useVideoComments(videoId, null);

    if(!allComments.length) return;

    return (
        <div className="w-full mt-[1rem]">
            <h1 className="text-2xl font-semibold">Comments</h1>
            <div className="mt-[1rem]">
                {
                    allComments.map((el) => {
                        const topLevel = el.snippet.topLevelComment;
                        
                        const commentId = topLevel.id;
                        const commentText = topLevel.snippet.textOriginal;
                        const author = topLevel.snippet.authorDisplayName;
                        const profile = topLevel.snippet.authorProfileImageUrl;
                        const replies = Boolean(el.snippet.totalReplyCount);

                        return <GetComment key={commentId} commentId={commentId} comment={commentText} author={author} profile={profile} replies={replies} videoId={videoId} />
                    })
                }
            </div>
        </div>
    );
};

export default CommentsCont;