import React from 'react'
import "./topbar.css"
//import {SearchIcon , PersonIcon} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
             <span className="logo">Social Media</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
            <SearchIcon className='searchicon'/>
            
            <input type="text" placeholder='search for friends , posts and videos' className='searchInput'/>
            </div>
        </div>
        
        <div
         className="topbarRight">
            <div className="topbaLinks"></div>
         </div>
         <div className="topbarRight">
            <div className="topBarLinks">
                <span className="topBarLink">Homepage</span>
                <span className="topBarLink">Timeline</span>
            </div>
            <div className="topBarIcons">
                <div className="topBarIconItem">
                  <PersonIcon/>
                <span className="topBarItembadge">1</span>
                </div>
                <div className="topBarIconItem">
                  <ChatIcon/>
                <span className="topBarItembadge">1</span>

                </div>
                <div className="topBarIconItem">
                  <NotificationsIcon/>
                  <span className="topBarItembadge">1</span>
                </div>
            </div>
         <img src="/assets/person/my.jpg" alt="" className="topBarImage" />
    </div>
    </div>
  )
}

export default Topbar