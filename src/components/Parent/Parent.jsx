import React, { useState } from 'react';
import GrendChil from './GrendChil/GrendChil';
import { createContext } from 'react';
export const MyContext = createContext()

const Parent = () => {
    const[count,setCount] = useState(0)
    let data = [15,48,56]
    let str= 'John';
    let obj = {
        name : 'John',
        age : 25
    }
    return (
        <div>
            <h1>Parent:{count}</h1>
            <MyContext.Provider value={{str,data,setCount,obj}} >
            <GrendChil/>
            </MyContext.Provider>
        </div>
    );
}

export default Parent;
