import React, { useState } from 'react'
import Icons from './icons8-todo-list-96.png'

function Todo() {
  const [inputdata,setData]=useState('')
  const [inputlist,setList]=useState([])
  const additem=()=>{
    if(!inputdata){

    }
    else{
      setList([...inputlist,inputdata])
      setData('');
    }


  }
  //delete item
  const deleteitem=(id)=>{
    const updated=inputlist.filter((elem,ind)=>{
      return ind!==id;
    })
    setList(updated)

  }
  const remove=()=>{
    setList([])
  }
  return (
    <div>
      <div className='main bg-gradient-to-r from-gray-700 via-gray-900 to-black w-full h-screen flex justify-center items-center relative '>
        <div className='child absolute top-24 space-y-3'>
          <figure className='ml-12'>
            <img src={Icons} alt='to-do app' className='ml-4'></img>
            <figcaption className='font-extralight text-[#A7D397] text-[15px]'>Add Your List Here </figcaption>
          </figure>
          <div className='add-item relative'>
            <input placeholder='Add Items...' type='text' className='border-2  w-[250px] h-7 rounded-sm text-start pl-2 outline-none text-[10px]' value={inputdata} onChange={(e)=>setData(e.target.value)}></input>
            <i className="fa-solid fa-plus absolute right-1 top-2 text-[13px] text-black" title='Add item' onClick={additem}></i>
            </div>
          <div className='showitem '>
            {
              inputlist.map((curr,ind)=>{
                return (
                    <div className='eachitem relative flex pt-2' key={ind}>
                <h3 className='borde-2 bg-violet-400 w-[250px] pl-2 font-normal h-7  p-2 outline-none rounded-sm text-white text-[10px] hover:bg-white hover:text-black'>{curr}</h3>
                <i className="fa-solid fa-trash absolute right-1 top-4 text-[13px]  text-orange-300" onClick={() => deleteitem(ind)}></i>
              </div>
                
                )

              })
            }
            
          </div>
          <div>
            {/* button */}
            <button type="submit" className='bg-violet-400 w-[100px] h-7 ml-16 mt-3 rounded-sm font-light text-[10px] text-white hover:bg-white hover:text-black ' onClick={remove}>REMOVE ALL</button>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Todo
