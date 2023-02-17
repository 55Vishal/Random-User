import React, { useState } from 'react'

function Leap() {
  
  const [value, setValue] =useState(0)
  
  function handelClick(){
    if(value%4===0 || value%100===0){
      alert("Leap year")
    }
    else{
      alert("Not leap year")
    }
  }
  
  return (
    <div className='App'>
    <input type="number" value={value} onChange={(e)=>setValue(e.target.value)} />
    <button onClick={handelClick}>Click</button>
    </div>
  )
}

export default Leap