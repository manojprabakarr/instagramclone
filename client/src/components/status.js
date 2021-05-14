
import React,{useState,useEffect} from 'react'
import Home from './home'
import axios from './axios'
import './status.css'

function Status() {
    const[people,setpeople]=useState([]);

    useEffect(()=>{
        const fetchdata= async()=>{
            const response=await  axios.get("/api/post");
            setpeople(response.data)
           
        }
        fetchdata()

    },[])
    return (
             <div className="status">
             <div className="statuscontainer">
            <img src="https://images.news18.com/ibnlive/uploads/2017/08/ajithkumar.jpg" alt=""  />
          

            <img src="https://images.news18.com/ibnlive/uploads/2017/08/ajithkumar.jpg" alt=""/>

            <img src="https://images.news18.com/ibnlive/uploads/2017/08/ajithkumar.jpg" alt=""/>

           

            <img src="https://images.news18.com/ibnlive/uploads/2017/08/ajithkumar.jpg" alt=""/>

            <img src="https://images.news18.com/ibnlive/uploads/2017/08/ajithkumar.jpg" alt=""/>

            <img src="https://images.news18.com/ibnlive/uploads/2017/08/ajithkumar.jpg" alt=""/>
            
        </div>
        <div className="statushome">
            {people.map((person)=>(
                  <Home 
                  key={person.id}
                  user={person.username}
                  post={person.posturl}
                  likes={person.like}
                  message={person.description}
                  profile={person.profileurl}


                  />

            ))}
       

        </div>
       
        </div>
    )
}

export default Status
