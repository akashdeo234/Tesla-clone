import { useState } from "react";
import { createContext } from "react";

export const userContext = createContext();


export const  Context = ({children}) => {
    const [name,setName] = useState('');
    return(
        <userContext.Provider value={{name,setName}}>
            {children}
        </userContext.Provider>
    )
}