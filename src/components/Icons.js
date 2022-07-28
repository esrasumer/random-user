import React from 'react'

const Icons = ({icon, index, activeLink, activeLinkHandler}) => {
    return (
        <i className={icon}
          key={index}
          onMouseOver={() => activeLinkHandler(index)}
          style={activeLink === index ? {
            color: "red",
          } : null}
        ></i>
      )
}

export default Icons