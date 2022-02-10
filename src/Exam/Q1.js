import React from 'react';
import { useState } from 'react/cjs/react.development';

// 1) Write a program in react to implement a readmore and read less using two different buttons by binding state of a particular component.

function Q1() {
    const [ read , setRead] = useState(false)
  return <div >
      <h1>1) Write a program in react to implement a readmore and read less using two different buttons by binding state of a particular component.</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, esse? {read?<> Lorem ipsum, dolor sit amet consectetur adipisicing <button onClick={()=>setRead(false)} className='bg-white text-black rounded px-2 text-xl'>Show Less</button></>:<button onClick={()=>setRead(true)}>Read More</button>}</p>
  </div>;
}

export default Q1;
