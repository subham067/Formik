import React, { useState } from 'react';
import axios from 'axios';

function Q5() {
    const [data, setdata] = useState("")

    function fatchAllData() {
        setdata("fatch Start loading...");
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((a) => {
                a.data.map(b => {
                    if (b.id == "4") {
                        console.log(b);
                        setdata("fatch Finish open console");
                    }
                })
            })
    }

    return <div>
        <h1>5) write a program to program in react to fetch post data whose I'd is 4 using jsonplaceholder live api.</h1>
        <button onClick={fatchAllData}>fatch</button>
        <h2>{data}</h2>
    </div>;
}

export default Q5;
