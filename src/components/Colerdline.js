import React from 'react'

export default function Colerdline({color}) {

    return (
        <hr
        style={{
            color: color,
            backgroundColor: color,
            width: 200,
            marginLeft: 50,
            marginRight: 50
            
        }}
    />
    )
}
