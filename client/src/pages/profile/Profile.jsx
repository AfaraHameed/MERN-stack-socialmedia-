import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar"; 
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState([])
  useEffect(() => {
    const fetchUser = async ()=>{
     try{
     const res =await axios.get(`/api/user?username=mom`)

     console.log(res.data)
     setUser(res.data)
     }catch(err){
     console.log(err)
     }
    }
    fetchUser()
   }, [])
  return (
    
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}post/img1.jpg`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}friend/friend.jpg`}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={user.username} />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}