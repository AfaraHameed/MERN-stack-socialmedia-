import React from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import {Users} from "../../dummyData" 

function Post({post}) {

  console.log(Users.filter((u) => u.id===post.userId)[0].profilePicture)
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u) => u.id===post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUserName">{Users.filter((u) => u.id===post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                   
                </div>
                <div className="postTopRight">
                <MoreVertIcon />
                </div>
            </div>
            
            <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
            <div className="postBottom">
            <div className="postBottomLeft">
            <ThumbUpIcon className='postBottomIcon'/>
            <ThumbDownIcon className='postBottomIcon'/>
            <span className="postLikeCounter">{post.like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postBottomComment">comments {post.comment}</span>
          </div>
            </div>
        </div>
    </div>
    
  )
}

export default Post