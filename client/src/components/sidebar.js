import { Avatar } from '@material-ui/core'
import React from 'react'
import './sidebar.css'


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarcontainer">
            <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" width="70px" height="70px" />

            <p>manojprabakar__
            <br/>
           
           <p>manojprabakar</p>
               
            </p>

            <a href="/">switch</a>

            </div>

            <div className="sidebardown">
                <h3>Suggections for you</h3>

                <a href="/">see all</a>


            </div>

            <div className="sidebarprofile">

                <Avatar src="https://images.newindianexpress.com/uploads/user/imagelibrary/2019/8/8/w900X450/Ajith_CE.jpg"/>

                <h4>Aravith</h4>

                <a href="/">follow</a>

            </div>


           


            
        </div>
    )
}

export default Sidebar
