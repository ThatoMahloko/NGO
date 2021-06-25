import React from 'react'
import './Subheading.css'
import { useState } from 'react'


function Subheading(props) {
    return (
        <div className="sub-heading">
            <h2 className="text-head" href="#">{props.text}</h2>
        </div>
    )
}

export default Subheading
