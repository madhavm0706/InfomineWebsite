import React from 'react'

export default function Colerdline({color}) {

    return (
        <hr
        style={{
            color: color,
            backgroundColor: color,
            
        }}
    />
    )
}
