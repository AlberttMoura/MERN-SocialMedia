import {MoreVert, FavoriteBorder} from "@material-ui/icons"
import "./post.css"

function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/person1.jpg" alt="" className="postProfileImg" />
                        <span className="postUsername">Annie Louis</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Abacateeeee</span>
                    <img src="/assets/general/g1.jpg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <FavoriteBorder className="likeIcon"/>
                        <span className="postLikeCounter">41 pessoas curtiram</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">11 comentários</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
