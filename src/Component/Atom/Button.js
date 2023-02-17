import React from 'react'

function Button(button) {
    const handelClick1 = () => {
        alert('Button 1 clicked')
    }
    const handelClick2 = () => {
        alert('Button 2 clicked')
    }
  return (
    <>
    <div>
    <button onClick={handelClick1} className='btn1'>Button1</button>
    </div>
    <div>
    <button onClick={handelClick2} className='btn2'>Button2</button>
    </div>
    </>
  )
}

export default Button