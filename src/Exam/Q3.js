import React from 'react';
import { useState } from 'react/cjs/react.development';

function Q3() {
    const [from , setFrom] = useState({Name:"", gender: "",qualification:"",email:"",address:""})
    return <div>
        <h1>Q3)Design a form in react with 4 input fields one for gender, highest qualification,email, address and print the values in alert box once the user hits the submit button.</h1>
        <input type="text" name="" id="" placeholder='Name' value={from.Name} onChange={(e)=>setFrom({...from,Name : e.target.value }) } /><br />
        <input type="radio" value="male" name='gender'  onChange={(e)=>setFrom({...from,gender : e.target.value }) } />
        <label for="html">male</label>
        <input type="radio" value="female" name='gender'  onChange={(e)=>setFrom({...from,gender : e.target.value }) } />
        <label for="css">female</label><br />
        <label for="qualification"> highest qualification:</label>

        <select name="qualification" value={from.qualification} onChange={(e)=>setFrom({...from,qualification : e.target.value }) } >
            <option value="B.A">B.A</option>
            <option value="H.s">H.s</option>
            <option value="10th">10th</option>

        </select><br />
        <input type="email" name="" id="" placeholder='email'  value={from.email} onChange={(e)=>setFrom({...from,email : e.target.value }) } /><br />
        <input type="text" name="" id="" placeholder='address' value={from.address} onChange={(e)=>setFrom({...from,address : e.target.value }) }  />
        <button onClick={()=> console.log(from) }>Submit</button>
    </div>;
}

export default Q3;
