import React from 'react'

const Button = ({ isActive, clicked, title }) => {
  return (
    <button onClick={clicked}>{isActive ? title : "Get User"}</button>)
}

export default Button