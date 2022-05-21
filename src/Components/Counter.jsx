import React, { useState } from "react"; 
import styles from "./counter.module.css"

const Counter = ({initial}) =>{
   
  const [count, setCount] = useState(initial)
  
    return (
        <div>
            <h1>Counter:</h1>
            <h1 className= {(count % 2 === 0 ? styles.green : styles.red )}>{count}</h1>
            <button onClick={()=>setCount(count + 1)} >Increment</button>
            <button onClick={()=>setCount(count - 1)} >Decrement</button>
            <button onClick={()=>setCount(count * 2)} >Double</button>
        </div>

    )
} 

export {Counter}