import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

function Q2() {
    const [num, setNum] = useState(0)
    const [number , setNumber] = useState(false)



    function CountStart() {
        console.log(number);
        if (number ) {
            setTimeout(() => {
                setNum(num => num + 1)
                CountStart()
            }, 1000);
        }
    }
    useEffect(() => {
        if (number == true ) {
            setTimeout(() => {
               
                setNum(num => num + 1)
            
               
            }, 500);
        }
        
    }, [num , number])
    return <div>
        <h1>2)Write a react program to implement a timer.</h1>
        <h1 >{num}</h1>
        <button onClick={() => setNumber(false)}>Stop</button>
        <button onClick={()=> setNumber(true)}>Start</button>
        <button onClick={() => setNum(0)}>Reset</button>
    </div>;
}

export default Q2;
