import React from 'react'

const Greetings=({fn})=>{
    const arr=["Aryan","Simon","Adi"];
    return(
        <>
        {<div>{ fn(arr)}</div>}
        </>
    )
}
export default Greetings