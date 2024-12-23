"use client"

import { useState } from "react";
import { createContext } from "react";


export const AppContext = createContext();

export function Mycontext({ children}){
    let [state , setState]= useState([])
    let  [whislist , setWhislist]=useState([])
    let [cart , setCart] = useState([])
    return(
        <AppContext.Provider value={{state , setState,cart , setCart, whislist , setWhislist  }}>
            {children}
        </AppContext.Provider>
    )
}
