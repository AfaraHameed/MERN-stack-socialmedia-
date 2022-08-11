import React, { useState } from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import {Users} from "../../dummyData" 

function Post({post}) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(Users.filter((u) => u.id===post.userId)[0].profilePicture)
  
  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
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
          <img className="postImg" src={PF+post.photo} alt="" />
        </div>
            <div className="postBottom">
            <div className="postBottomLeft">
            <ThumbUpIcon className='postBottomIcon' onClick={likeHandler}/>
            <ThumbDownIcon className='postBottomIcon' onClick={likeHandler}/>
            <span className="postLikeCounter">{like} people like it</span>
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