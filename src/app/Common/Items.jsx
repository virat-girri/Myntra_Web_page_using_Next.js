"use client"
import React, { useState } from 'react'

function Items({dataI, setCatwiseP}) {
//  console.log(setCatwiseP)
    const array = [
        {
          discount: " 10% and above",
        },
        {
          discount: " 20% and above",
        },
    
        {
          discount: " 30% and above",
        },
    
        {
          discount: " 35% and above",
        },
        {
          discount: " 40% and above",
        },
        {
          discount: " 50% and above",
        },
      ];



  return (
    <div>
       <div className="mx-[auto]">
              <div className=" pb-[10px] border-r-[0.5px]">
                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white pt-[15px]">
                  CATEGORIES
                </h3>
                <ul className="w-48 text-sm font-medium text-gray-900 bg-white border   dark:bg-gray-700 border-none dark:text-white">
                  {dataI.map((v, i) => {
                    
                    return (
                      <li key={i} className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600" >
                        <div className="flex items-center">
                          <input
                            id="vue-checkbox"
                            type="checkbox"
                            value={v.slug}
                         
                            onChange={()=>setCatwiseP(v.url)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="vue-checkbox"
                            className="w-full  ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {v.slug}
                          </label>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="py-[10px] border-t-[0.5px] border-r-[0.5px]">
                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white pt-[15px]">
                  BRAND
                </h3>
                <ul className="w-48 text-sm font-medium text-gray-900 bg-white border   dark:bg-gray-700 border-none dark:text-white">
                 
                  {dataI.map((v, i) => {
                    return (
                      <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div className="flex items-center">
                          <input
                            id="vue-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="vue-checkbox"
                            className="w-full  ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {v.name}
                          </label>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="py-[10px] border-t-[0.5px] border-r-[0.5px]">
                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white pt-[15px]">
                  PRICE
                </h3>
                <div className="">
                  <div className="relative mb-6">
                    <label htmlFor="labels-range-input" className="sr-only">
                      Labels range
                    </label>
                    <input
                      id="labels-range-input"
                      type="range"
                      value="1000"
                      min="100"
                      max="1500"
                      className="w-[180px] h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                      ₹100 - ₹2,600+
                    </span>
                  </div>
                </div>
              </div>

              <div className="py-[10px] border-t-[0.5px] border-r-[0.5px]">
                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white pt-[15px]">
                  COLOR
                </h3>
                <ul className="w-48 text-sm font-medium text-gray-900 bg-white border   dark:bg-gray-700 border-none dark:text-white">
                  {dataI.map((v, i) => {
                    return (
                      <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div className="flex items-center">
                          <input
                            id="vue-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <span className="w-[15px] h-[15px] ml-[5px] rounded-[50%] bg-[red] overflow-hidden"></span>
                          <label
                            htmlFor="vue-checkbox"
                            className="w-full  ms-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            RED
                          </label>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="py-[10px] border-t-[0.5px] border-r-[0.5px]">
                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white pt-[15px]">
                  Discount Range
                </h3>
                <ul className="w-48 text-sm font-medium text-gray-900 bg-white border   dark:bg-gray-700 border-none dark:text-white">
                  {array.map((v, i) => {
                    return (
                      <li key={i} className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div className="flex items-center">
                          <input
                            id="vue-checkbox"
                            type="radio"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="vue-checkbox"
                            className="w-full  ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {v.discount}
                          </label>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div> 
    </div>
    
  )
}

export default Items
