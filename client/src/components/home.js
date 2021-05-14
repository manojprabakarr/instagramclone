import React from 'react'
import "./home.css"
import { Avatar } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SendIcon from '@material-ui/icons/Send';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';

function Home({user,post,likes,message,profile,id}) {
    return (
        
        <div className="home">
            <div className="homeconatiner">
                <div className="homeheader">

                    <Avatar src={profile}/>
                    <p>{user}</p>
                    <MoreHorizIcon/>

                </div>


                <div className="homecenter"> 
                <img src={post} alt="postloading"/>
                <p>{user}:"{message}"</p>

                </div>

                <div className="homelike">
                    
                  <div className="like">
                  <FavoriteBorderIcon/>
                    <SendIcon/>
                    <ChatBubbleOutlineIcon/>
                  
                  </div>
                  <BookmarkBorderIcon/>
                  

                  
                  

                </div>

                <div className="homecomment">
                    <Avatar src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                    <p>Liked by Priya And {likes} others</p>

                </div>

                <div className="homeform">
                    <SentimentSatisfiedIcon/>
                    <input type="text" placeholder="add a comment"/>
                    <button type="submit">post</button>

                </div>

            </div>
            
        </div>
    )
}

export default Home
