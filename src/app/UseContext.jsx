"use client"

import { createContext, useState } from "react";

 export const WishContext = createContext();
function UseContext(children) {
    const [wishlist, setWishlist] = useState([]);

  return (
    <WishContext.Provider value={{ wishlist,setWishlist }}>
   {children}
  </WishContext.Provider>
  )
}

export default UseContext
