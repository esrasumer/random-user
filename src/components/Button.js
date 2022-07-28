import React from 'react'

const Button = ({isActive,clicked})=> {
  return (
<button onClick={clicked}>{isActive ? "Get onather user" : "Get User" }</button>  )
}

export default Button