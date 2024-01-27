import React from "react";
import Header from './components/header.jsx'
import API from "./api.js"
function createEntry(term){
  return <div>
    <Header key={term.id} no={term.no} read={term.read} views={term.views} comment={term.comment} color={term.color}/>

  </div>
  
}
function App() {
  return (
    <div className="w-full h-[200vh] bg-contain bg-violet-200">
      <div className="absolute flex space-x-30 xl:flex-row top-28 left-20 md:flex-col md:items-center md:right-4 md:space-y-5 " >   
      {
        API.map(createEntry)
      }     

      </div>
      </div>

      
  )
}

export default App
