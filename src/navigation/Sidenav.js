import React from 'react'
import "./Sidenav.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


function Sidenav() {
  return (
    <div className='Sidenav'>
    <img className="sidenav__logo" src="https://i.pinimg.com/originals/31/77/b1/3177b1206f61517774d2c7690b30d3a4.png" alt="logo" />
    <div className="sidenav__buttons">  
    <button className='sidenav__button'>
        <HomeIcon/>
        <span>Home</span>
    </button>
    <button className='sidenav__button'>
        <SearchIcon/> 
        <span>Search</span>
    </button>
    <button className='sidenav__button'>
        <ExploreIcon/>
        <span>Explore</span>
    </button>
    <button className='sidenav__button'>
        <SlideshowIcon/>
        <span>Reels</span>
    </button>
    <button className='sidenav__button'>
        <ChatBubbleIcon/>
        <span>Messages</span>
    </button>
    <button className='sidenav__button'>
        <FavoriteBorderIcon/>
        <span>Notifications</span>
    </button>
    <button className='sidenav__button'>
        <AddCircleOutlineIcon/>
        <span>Create</span>
    </button>
    </div>
    <div className='sidenav__more'>
        <button className='sidenav__button'>
        <MenuIcon/>
        <span>More</span>
        </button>
    </div>
    </div> 

  )
}

export default Sidenav 