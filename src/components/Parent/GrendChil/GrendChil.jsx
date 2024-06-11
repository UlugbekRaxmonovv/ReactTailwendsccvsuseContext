import React,{useContext} from 'react';
import { MyContext } from '../Parent';

const GrendChil = () => {
    const {str,setCount,data,obj} = useContext(MyContext);
    return (
        <div>
            <button onClick={()=>setCount(p => p + 1)}>Increment</button>
            <h1>{str}</h1>
            <p>{data}</p>
            <i>{obj.name +  obj.age}</i>
        </div>
    );
}

export default GrendChil;
