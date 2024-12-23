"use client";

import Link from "next/link";
import Header from "../Header";
import Footer from "../Footer";

import { useParams } from "next/navigation";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/Mycontext";

export default function SingleProduct() {
  let id = useParams().id[1];
  //console.log(id);
  let [images, setImages] = useState([]);
  //console.log("img" , images)
  let [ItemsData, setItemsData] = useState([]);
  let {state , setState}=useContext(AppContext)
  console.log("jai", state)
  let {wishlist, setWhislist}=useContext(AppContext)
  //setState('hii my name is virat')
  //let  {cart , setCart}=useContext(AppContext)
  let singleData = () => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((ress) => {
        setItemsData(ress.data);
        setImages(ress.data.images);
        //setState(ress.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    singleData();
  }, []);

//addWhist function

let isChecked;
  let addWhislist=()=>{
   
    isChecked=state.some((v)=> v.id == id);

       console.log("onclick",isChecked)

    let stateObj={
       id:ItemsData.id,
       price:ItemsData.price,
       title:ItemsData.title,
       img:ItemsData.thumbnail,
       quantity:1,
       brand:ItemsData.brand 

    }
    if(isChecked == true){
      let filterwish=state.filter((v)=>v.id!=id)

      setState(filterwish)
   
      //toast.success("added")
    }else{
    setState([...state,stateObj])
    //toast.success("Item Added in Cart !!" )
  }



}



  return (
    <div>
      <Header />
      <div className="w-[1300px] m-[auto] mt-[50px] ">
        <p className=" text-[13px] ">
          Home / Clothing / Men Clothing / Tshirts /{" "}
          <span className="font-bold text-[13px] text-[black]">
            Roadster Tshirts{" "}
          </span>
        </p>
        <div className="mt-[10px] grid  grid-cols-[63%_37%] gap-1">
          <div className=" grid grid-cols-2 gap-2 w-[800px]  ">
         
            {images.map((v, i) => {
              return (
              
              <img key={i} src={v} alt="" />

              )
            })}
          </div>

          <div className="">
            <h1 className="text-[25px] font-serif font-bold ">
              {ItemsData.brand}
            </h1>
            <h1 className="text-[20px] font-serif font-[600] ">
              {ItemsData.category}
            </h1>
            <p className="text-[20px] font-serif mt-[10px] ">
              {ItemsData.title}
            </p>
            <div className="w-[200px] mt-[20px] p-[5px]  flex justify-around border-2">
              <p className="text-[15px]   font-bold">{ItemsData.rating} star</p>
              <p className="text-[15px] pl-[5px] border-l-2 font-bold">
                {ItemsData.rating + 2}k Rating
              </p>
            </div>

            {/* ////////////////////////////////////////////////////// */}

            <div className="mt-[20px] border-t-2 pt-[20px] ">
              <h1 className="font-[bold] text-[20px]  ">
                ₹{ItemsData.price} &nbsp;
                <span className="text-[#585656] line-through ">
                  MRP ₹
                  {(ItemsData.price + (ItemsData.price * (65 / 100))).toFixed(2)}
                </span>
                &nbsp;
                <span className="text-[#706e05eb] ">(65% OFF)</span>
              </h1>
              <p className="text-[14px] mt-[5px] text-[blue] font-bold">
                <a href="#">inclusive of all taxes</a>
              </p>

              <button  className="w-[200px] rounded-[5px] mt-[20px] bg-[#fc3052] text-[white] text-[18px] p-[10px]">
                <Link href="/shopingcards">Add to Cart</Link>{" "}
              </button>

              <button onClick={addWhislist}  className="w-[200px] rounded-[5px] mt-[20px] ml-[10px] bg-[#2a2a2a] text-[white] text-[18px] p-[10px]">
                Whislist
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
