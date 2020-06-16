import React from 'react'

export default function Colerdline({color,width,marginleft,marginright}) {

    return (
        <hr
        style={{
            color: color,
            backgroundColor: color,
            width: width,
            marginLeft: parseInt(marginleft),
            marginRight:parseInt(marginright)
            
        }}
    />
    )
}
