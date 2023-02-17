import React, { useState } from 'react'

function Random() {
    const names = ['Vishal', 'Shubham', 'Shubham', 'Abhishak', 'Bhavesh', 'Harsh']
    const [list, setList] = useState("")

    function handelUser() {
        setList(names[Math.floor(Math.random() * names.length)])
    }
    return (
        <>
            <div>
                <h2> {list} </h2>
            </div>
            <div>
                <button onClick={handelUser}>Click here</button>
            </div>
        </>
    )
}

export default Random