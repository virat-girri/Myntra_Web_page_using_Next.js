"use client";
import React, { useContext, useEffect, useState } from "react";

import axios from "axios";

import Items from "./Items";

import Cards from "./Cards";

export default function Main() {
  let [product, setProduct] = useState([]);

  let [cat, setCat] = useState([]);

  const [catwiseP, setCatwiseP] = useState(null);

  // console.log(catwiseP)
  let cards = () => {
    let myApi;
    if (catwiseP == null) {
      myApi = "https://dummyjson.com/products?limit=100";
    } else {
      myApi = catwiseP;
    }
    axios
      .get(myApi)
      .then((v) => {
        //console.log(v.data);
        setProduct(v.data.products);
      })
      .catch((error) => {
        console.log("error");
      });
  };

  useEffect(() => {
    cards();
  }, [catwiseP]);

  let Cat = () => {
    axios.get("https://dummyjson.com/products/categories").then((v) => {
      //console.log(v.data)
      setCat(v.data);
      //setBrand(v.data);
    });
  };

  useEffect(() => {
    Cat();
  }, []);

  return (
    <div>
      <div className="w-[1300px] m-[auto]">
        <p className=" text-[13px] mt-[30px]  ">
          <a href="" className="cursor-pointer">
            Home
          </a>

          <a className="cursor-pointer" href="">
            Clothing
          </a>

          <a className="text-[black] cursor-pointer   font-bold " href="">
            Men T-Shirt
          </a>
        </p>

        <p className="text-[15px] font-bold ">
          Men T-Shirt
          <span className="text-[#ccc] font-[15px]">- 5229 items</span>
        </p>
      </div>

      <div className="w-[100vw] m-[auto]">
        <div className="mt-[30px]">
          <div className=" w-[1300px] m-auto">
            <div className="flex items-center ">
              <p className="text-[15px] font-bold">FILTERS</p>
              <div className="text-[14px] ml-[150px] text-[#575757]">
                <select className="outline-none" name="Bun" id="">
                  <option value="">Bundles</option>
                </select>
                <select className="outline-none" name="" id="">
                  <option value="">Country of origin</option>
                </select>

                <select className="outline-none" name="" id="">
                  <option value="">Size</option>
                </select>
              </div>
              <div className="flex w-[300px] justify-around border-2 ml-[500px] px-[5px] py-[10px] items-center ">
                <p>sort by:</p>
                <select name="" className="w-[230px] text-[15px] " id="">
                  <option value="">Recommended</option>
                  <option value="">Recommended</option>
                </select>
              </div>
            </div>
          </div>
          {/* ////////////////////////////////////////////////////////////////////// */}
          <div className="grid grid-cols-[18%_80%] border-[0.5px]  mt-[10px]">
            <Items dataI={cat} setCatwiseP={setCatwiseP} />
            <div className="grid grid-cols-4 gap-2">
              {product.map((v, i) => {
                return (
                  <Cards
                    data={v}
                    product={product}
                    setProduct={setProduct}
                    key={i}
                    index={i}
                  />
                );
              })}
            </div>{" "}
            {/* items  */}
          </div>
        </div>
      </div>
    </div>
  );
}
