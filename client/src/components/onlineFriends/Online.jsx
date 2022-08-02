import React from "react";
import "./online.css"
function Online({user}) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgcontainer">
        <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
      </div>
      <span className="rightbarOnline"></span>
      <span className="rightbarUserName">{user.username}</span>
    </li>
  );
}

export default Online;
