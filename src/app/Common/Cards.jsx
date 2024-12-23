"use client"


import Link from 'next/link';
import { useContext } from 'react';
import { CiHeart } from "react-icons/ci";
import { AppContext } from '../context/Mycontext';
function Cards({data,index,product,setProduct}) {
  return (
    <div className='p-[10px]'>
      <div className="w-[200px] h-[330px] shadow-[0px_1px_3px_#ccc] mt-[10px] ">
         <div className=" p-[5px]">
        <Link href={`/singleproduct/${data.id}`}>  <img src={data.thumbnail} alt="" className='h-[220px] w-[100%] ' /></Link>
         </div>

          <div className="relative images  ">
            <div className="w-[200px] h-[50px] whist p-[10px] bg-[white] ">
              <div className="flex items-center cursor-pointer p-[5px]   w-[100%] border-2 justify-center">  
              <CiHeart className='text-[20px]' /> <span className='ml-[5px]'onClick={()=>addwhislist(data.id)} >Whislist</span>
              </div>
            </div>
            <div className="py-[5px] px-[10px]">
            <p className='text-[14px] text-[black] font-bold '>{data.title}</p>
            <p>Mens sold</p>
            <h1>Rs. {data.price} <span className='line-through'>Rs. {((data.price) + (index*2)).toFixed(2)}</span></h1>
             
          </div>
          </div>

      </div>


    </div>
  )
}

export default Cards
