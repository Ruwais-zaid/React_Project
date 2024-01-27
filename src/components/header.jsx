   import React from "react";
   import Icon from "../icons8-todo-list-96.png"
   const Header=(props)=>{
    return <div className="flex items-center justify-center">
        <div className="container bg-white  border-1 w-[300px] h-[450px] shadow-xl rounded-lg mr-[2rem]  ">
            <div className="bg-orange-200 rounded-lg hover:bg-black">
                <img src={Icon} alt="Logo image " className="ml-24"  />
            </div>
            <div className="flex flex-col items-center m-4 gap-7 middle">
                <p className="font-medium text-red-400 text-md ">{props.no}</p>
                <h1 className="text-xl font-semibold ">Post One</h1>
                <p className="w-[80%] ml-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam consequatur distinctio voluptas.</p>
            </div>
            <div className={`flex flex-col bg-${props.color} h-[4.9rem] mt-[3.4rem] rounded-b-md shadow-md`}>
                <div className="mt-5 ml-5 font-thin text-white text-[15px] ">
                <div className="flex flex-row gap-5 space-x-16 number">
                    <p className="ml-2">{props.read}</p>
                    <p>{props.views}</p>
                    <p>{props.comment}</p>
                </div>
                <div className="flex flex-row space-x-16 read ">
                    <p>Read</p>
                    <p>View</p>
                    <p>Comments</p>
                    
                </div>
                </div>
                
            </div>
        </div>
    </div>
   }
   export default Header;