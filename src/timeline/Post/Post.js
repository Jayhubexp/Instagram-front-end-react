import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import MoreHorizonIcon from '@mui/icons-material/MoreHoriz'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import TelegramIcon from '@mui/icons-material/Telegram'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'

function Post({user, postImage, likes, timestamp}) {
  return (
    <div className='post'>
        <div className='post__header'>
            <div className='Author'>
            <Avatar>{user.charAt(0)}</Avatar>
           {user} • <span>{timestamp}</span>
          </div>
          <MoreHorizonIcon className='more'/>
        </div>
        <div className='post__image'>
            <img src={postImage} alt=''/>
        </div>
        <div className='post__footer'>
            <div className='post__footerIcons'>
                <div className='MainIcons'>
                    <FavoriteBorderIcon className='post_icon'/>
                    <ChatBubbleOutlineIcon className='post_icon'/>
                    <TelegramIcon className='post_icon'/>
                </div>
                <div className='saveIcon'>
                    <BookmarkBorderIcon className='post_icon'/>
                </div>
            </div>
            <div className='likes'>
           {likes}
           </div>
        </div>

    </div>
  )
}

export default Post