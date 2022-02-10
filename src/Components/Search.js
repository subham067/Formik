import React, { useEffect, useState } from 'react';

function Search() {
    const [todo, setTodo] = useState([])
    const [Alltodo, setAlltodo] = useState([])
    function SearchStart(e) {
       const SearchItem = Alltodo.filter(f=>{
        return Object.values(f).join(" ").includes(e)
        })
        setTodo(SearchItem)
    }
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(b => {
                setTodo(b)
                console.log(b)
                setAlltodo(b)
            })
    },[])
    return <div>
        <div className="container mx-auto">
            <div className=" text-center">
                <h1 className='text-3xl text-center'>Subham Ghosh</h1>
                <input type="text" className='w-2/6 bg-green-500 text-white  rounded-2xl shadow py-1 border-2 px-3 text-lg border-black' placeholder=' search for product' onChange={(e) => SearchStart(e.target.value)} />
                <button className='bg-red-500 rounded-xl mx-2 px-2 border-red-500  text-white text-lg hover:bg-red-600'>Search</button>
            </div>
            <ul class="ml-20">
                {todo.map(i => {
                    return <>
                        <li className={i.completed ? "text-green-500" : "text-red-500"} >{i.title}  </li>
                    </>
                })}
            </ul>
        </div>
    </div>;
}

export default Search;
