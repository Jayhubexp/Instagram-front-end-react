import React, { useState } from 'react'
import "./Timeline.css"
import Suggestion from './Suggestion'
import Post from './Post/Post'


function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "super.sam_",
      postImage: "https://media.gettyimages.com/id/1223377524/photo/cheerful-businessman-working-from-home-on-phone.jpg?s=612x612&w=0&k=20&c=bKFcSrlAH4nDm-vPYErWxi0tbWdKedZH0E4lEsaOWXA=",
      likes: "Liked by SENA_MC and 1000 others",
      timestamp: "1d",
    },
    {
      user: "SENA_MC",
      postImage: "https://media.gettyimages.com/id/1358219329/photo/woman-entrepreneur-presenting-at-business-seminar.jpg?s=612x612&w=0&k=20&c=PGzndVoIIPeq9hIqM4PEYjOoOi5FaAl91AZFrVUXX2E=",
      likes: "Liked by super.sam_ and 299 others",
      timestamp: "2h",
    },
    {
      user: "cieelegon",
      postImage: "https://media.gettyimages.com/id/184962061/photo/business-towers.jpg?s=612x612&w=0&k=20&c=gLQLQ9lnfW6OnJVe39r516vbZYupOoEPl7P_22Un6EM=",
      likes: "Liked by ampofo.mike and 608 others",
      timestamp: "7h",
    }
  ]);
  return (
    <div className="Timeline">
    <div className="timeline__left">
      <div className='timeline__posts'>
        {posts.map((post) => (
        <Post 
        user={post.user}
        postImage={post.postImage}
        likes={post.likes}
        timestamp={post.timestamp}
        />
        ))}
      </div>
    </div>
    <div className="timeline__right">
        <Suggestion /> 
    </div>
    </div>
  )
} 

export default Timeline