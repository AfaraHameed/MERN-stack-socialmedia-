import "./rightbar.css";
import {Users} from "../../dummyData"
import Online from "../onlineFriends/Online";
function Rightbar(user) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="rightbar">
      <div className="rightbarContainer">
        <div className="birthdayContainer">
          <img className="birthdayImg" src={`${PF}gift.png`} alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img src={`${PF}gift.png`} alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">online friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => <Online key={u.id} user={u} />)}
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
