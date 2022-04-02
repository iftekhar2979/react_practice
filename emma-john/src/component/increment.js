import React, { useState } from 'react';

export default function Increment() {
    const [count, setCount]=useState(10);
    const handleIncrease=()=>{
        const newCount=count+1;
        setCount(newCount)
    }
    const [decrement,SetDecrement]=useState(10);
    const handleDecrement=()=>{
        const newCount=decrement-1;
        SetDecrement(newCount)
    }
    const [twoPlus,setTwoplus]=useState(0)
    const twoPlusHandle=()=>{
        const newTwoPlus=twoPlus+2;
        setTwoplus(newTwoPlus)
    }
    const [divide,setDivide]=useState(512)
    const divideHandle=()=>{
        const newdivide=divide/2;
        setDivide(newdivide)
    }
  return (
      <div>
    <div>
<h1>Count :{count}</h1>
<button onClick={handleIncrease}>increment</button>
    </div>
    <div>
    <h2>Decrement :{decrement}</h2>
    <button onClick={handleDecrement}>decrement</button>
</div>
<div>
    <h2>Two Plus :{twoPlus}</h2>
    <button onClick={twoPlusHandle}>Plus 2</button>
</div>
<div>
    <h2>Divide the Num :{divide}</h2>
    <button onClick={divideHandle}>divide by 2</button>
</div>
</div>
  )
}