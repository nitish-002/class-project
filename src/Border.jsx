import React from 'react'

const Border = ({childern}) => {
  return (
    <div style={{border:'2px solid black',backgroundColor:'steelblue',height:'20px',width:'120px'}}>{childern}</div>
  )
}

export default Border