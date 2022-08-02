
import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import  ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import  GroupIcon from '@mui/icons-material/Group';
import  BookMarksIcon from '@mui/icons-material/Bookmarks';
import  HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import  WorkIcon from '@mui/icons-material/Work';
import  EventSeatIcon from '@mui/icons-material/EventSeat';
import  SchoolIcon from '@mui/icons-material/School';
import {Users } from "../../dummyData" 
import CloseFriends from "../closeFriends/CloseFriends";
//import { ChatIcon,PlayCircleIcon ,GroupIcon ,BookMarksIcon , HelpOutlineIcon , WorkIcon ,EventSeatIcon , SchoolIcon} from '@mui/icons-material';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItems">
                    <RssFeedIcon className = "sidebarIcons"/>
                    <span className="sidebarListItemText">feed</span>
                </li>
                <li className="sidebarListItems">
                    <ChatIcon className = "sidebarIcons"/>
                    <span className="sidebarListItemText">Chat</span>
                </li>
                <li className="sidebarListItems">
                    <PlayCircleIcon className = "sidebarIcons"/>
                    <span className="sidebarListItemText">video</span>
                </li>
                <var>  <li className="sidebarListItems">
                    <GroupIcon className = "sidebarIcons"/>
                    <span className="sidebarListItemText">group</span>
                </li>
                <li className="sidebarListItems">
                    <BookMarksIcon className = "sidebarIcons"/>
                    <span className="sidebarListItemText">bookmark</span>
                </li>
                <li className="sidebarListItems">
                    <HelpOutlineIcon className = "sidebarIcons"/>
                    <span className="sidebarListItemText">question</span>
                </li>
                <li className="sidebarListItems">
                    <WorkIcon className = "sidebarIcons"/>
                    <span className="sidebarListItemText">job</span>
                </li>
                <li className="sidebarListItems">
                    <EventSeatIcon  className = "sidebarIcons"/>
                    <span className="sidebarListItemText">events</span>
                </li>
                <li className="sidebarListItems">
                    <SchoolIcon className = "sidebarIcons"/>
                    <span className="sidebarListItemText">course</span>
                </li></var>
            </ul>
            <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
           
        {Users.map((u) => <CloseFriends key={u.id} user={u} />)}
        </ul>
        </div>
    </div>
  )
}

export default Sidebar