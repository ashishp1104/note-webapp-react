import React from 'react'
import {useState} from 'react'

import { X } from 'lucide-react';
const App = () => {

   const[title, setTitle]=useState('')
   const[detail,setDetail]=useState('')

    const[task,setTask]=useState([])



  const submitHnadler=(e)=>{
    e.preventDefault()
    
    const copyTask=[...task]
    copyTask.push({title,detail})
    setTask(copyTask)
    // console.log(task);
    

    setTitle('')
    setDetail('')
    
   
   

  }
   const deleteNote = (idx)=> {
      const copyTask = [...task];
      copyTask.splice(idx,1)
      setTask(copyTask)
      
      
      
    }


  return (
    <div className='h-screen bg-black text-white lg:flex'>
      
      <form onSubmit={(e)=>{
        submitHnadler(e)
      }} className='p-8 flex gap-3 lg:w-1/2 items-start  flex-col' action="">
        <h1 className='text-2xl font-bold'>Add Notes</h1>
        <input type="text" placeholder='Enter notes Heading' className='font-medium px-5 py-2 w-full outline-none border-2 rounded' value={title} onChange={(e)=>{
          setTitle(e.target.value)
          
        }}/>
        <textarea className='font-medium outline-none px-4 h-30 w-full py-2 border-2 rounded ' type="text" placeholder='Enter Details' value={detail} onChange={(e)=>{
          setDetail(e.target.value)
          
        }} />
        <button className='bg-white active:scale-95 font-medium outline-none w-full text-black px-5 py-2 rounded'>Add Notes</button>
        
       
      </form>
                  <div className='lg:w-1/2 p-10 lg:border-l-2'>
      <h1 className='text-2xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 h-[90%] overflow-auto'>
          
                          {task.map(function (elem, idx){
          return <div key={idx} className='relative h-50 w-40 bg-cover flex justify-between flex-col items-start rounded-xl text-black pt-10 px-12 pb-8  bg-[url("https://png.pngtree.com/png-clipart/20250108/original/pngtree-sticky-notes-paper-design-vector-png-image_20015422.png")] '>

          <div>
             <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-3 leading-tight font-medium text-gray-500'>{elem.detail}</p>
          </div>
          <button onClick={()=>{
            deleteNote(idx)
          }} className='w-full bg-red-600 py-1 cursor-pointer active:scale-95 text-xs text-white rounded-full font-bold'>Delete</button>


          </div>
        })}
         
        </div>
      </div>
    </div>
  )
}

export default App

          // <div className='h-50 w-38 rounded-2xl bg-white'></div>
          // <div className='h-50 w-38 rounded-2xl bg-white'></div>
          // <div className='h-50 w-38 rounded-2xl bg-white'></div>

