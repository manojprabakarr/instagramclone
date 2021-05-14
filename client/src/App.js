import React from 'react'
import './App.css'
import Header from './components/header'
import Status from './components/status'
import Sidebar from './components/sidebar'




function App() {
  return (
    <div className="App">
      <Header/>


      <div className="appbody">
      <Status/>
      <Sidebar/>
      
       
       

      </div>
    
     


      
      
      
     
    
    </div>
  );
}

export default App;
