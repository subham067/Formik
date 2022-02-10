import React,{useState} from 'react';

function Q4() {
    const [num, setNum] = useState(0)
  return <div>
    < h1>Q4)write a react program with 3 buttons where first button will work for incrementing the value of the counter by 5 and second button will work as decrement the counter value by 2 and the third button will work as a reset button by making the counter value by 0.</h1>
<h1>{num}</h1>
<button onClick={()=> setNum(num + 5)}>increment + 5</button>
<button onClick={()=> setNum(num -2)}>decrement - 2</button>
<button onClick={()=> setNum(0)}>reset</button>

  </div>;
}

export default Q4;
