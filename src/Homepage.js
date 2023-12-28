import React from 'react'
import "./Homepage.css" 
import Sidenav from './navigation/Sidenav'
import Timeline from './timeline/Timeline'

function Homepage() {
  return (
    <div className='Homepage'>
     <div className='homepage__nav'>
        <Sidenav />
     </div>
     <div className='timeline__bar'>
        <Timeline />
     </div>
    </div>
  )
}

export default Homepage