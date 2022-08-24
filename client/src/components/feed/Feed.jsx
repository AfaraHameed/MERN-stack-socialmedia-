import React, { useEffect, useState } from 'react'
import Post from '../posts/Post'
import Share from '../share/Share'
import axios from "axios"

function Feed({username}) {
  const [post, setPost] = useState([])
  useEffect(() => {
   const fetchPost = async ()=>{
    try{
    const res = username ? await axios.get(`/api/post/profile/${username}`)
    : await axios.get("/api/post/timeline/62e8a510ef9df0e6b3cc18db")
    console.log(res.data)
    setPost(res.data)
    }catch(err){
    console.log(err)
    } 
   }
   fetchPost()
  }, [username])
  return (
    <div className='feed'>
      <div className="feedWrapper">
      <Share/>
      {post.map((p) => (
        <Post key={p.id} post={p}/>
      ))}
      </div>
    </div>
  )
}

export default Feed