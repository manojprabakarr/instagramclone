import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Avatar } from '@material-ui/core';
import './header.css'


function Header() {
    return (
        <div className="header">
            <div className="headerleft">
            <img src="https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2020/12/instagram-old.png?resize=1100%2C750&ssl=1" alt=""/>
            

            </div>

            <div className=" headercenter">
                <input type="text" placeholder="search"/>

            </div>

            <div className="headerright">
                <HomeIcon/>
                <SendIcon/>
                <ExploreIcon/>
                <FavoriteBorderIcon/>
                <Avatar src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"/>

            </div>
        
        </div>
    )
}

export default Header
