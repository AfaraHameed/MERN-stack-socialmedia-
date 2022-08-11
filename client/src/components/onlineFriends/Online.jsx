import React from "react";
import "./online.css"
function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgcontainer">
        <img src={PF+user.profilePicture} alt="" className="rightbarProfileImg" />
      </div>
      <span className="rightbarOnline"></span>
      <span className="rightbarUserName">{user.username}</span>
    </li>
  );
}

export default Online;
