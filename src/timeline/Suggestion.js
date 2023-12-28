import React from 'react'
import "./Suggestion.css" 
import { Avatar } from '@mui/material'

function Suggestion() {
  return (
    <div className='suggestions'>
      <div className='suggestions_title'>
        Suggestions for you
      </div>
      <div className='user__names'>


        <div className='suggestion_username'>
          <div className='username__left'>
              <span className='avatar'>
                <Avatar>D</Avatar>
              </span>
              <div className='username__info'>
                <span className='username'>_desmond</span>
                <span className='relation'>New to Instagram</span>
              </div>
          </div>
          <button className='follow'>Follow</button>
        </div>

        <div className='suggestion_username'>
          <div className='username__left'>
              <span className='avatar'>
                <Avatar>D</Avatar>
              </span>
              <div className='username__info'>
                <span className='username'>_desmond</span>
                <span className='relation'>New to Instagram</span>
              </div>
          </div>
          <button className='follow'>Follow</button>
        </div>

        <div className='suggestion_username'>
          <div className='username__left'>
              <span className='avatar'>
                <Avatar>D</Avatar>
              </span>
              <div className='username__info'>
                <span className='username'>_desmond</span>
                <span className='relation'>New to Instagram</span>
              </div>
          </div>
          <button className='follow'>Follow</button>
        </div>

        <div className='suggestion_username'>
          <div className='username__left'>
              <span className='avatar'>
                <Avatar>D</Avatar>
              </span>
              <div className='username__info'>
                <span className='username'>_desmond</span>
                <span className='relation'>New to Instagram</span>
              </div>
          </div>
          <button className='follow'>Follow</button>
        </div>
      </div>

    </div>
  )
}

export default Suggestion 