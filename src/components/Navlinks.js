import React from 'react'
import './Navlinks.css'
//import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";

/*//const textStyling = () => {

}*/

function Navlinks() {
    return (
        <div className="nav-links">
            <ul>
                <h1 className="linkAnim">
                    <NavLink exact to="/home " style={{ textDecoration: "none", color: "white" }}>
                        HOME
                    </NavLink>
                </h1>
            </ul>

            <ul>
                <h1 className="linkAnim">
                    <NavLink exact to="/breastisbest" style={{ textDecoration: "none", color: "white" }}>
                        BREAST IS BEST?
                    </NavLink>
                </h1>
            </ul>

           

            <ul>
                <h1 className="linkAnim">
                    <NavLink exact to="/videos" style={{ textDecoration: "none", color: "white" }}>
                        VIDEOS
                    </NavLink>
                </h1>
            </ul>

            <ul>
                <h1 className="linkAnim">
                    <NavLink exact to="/about" style={{ textDecoration: "none", color: "white" }}>
                        ABOUT
                    </NavLink>
                </h1>
            </ul>

            <ul>
                <h1 className="linkAnim">
                    <NavLink exact to="/contact" style={{ textDecoration: "none", color: "white" }}>
                        CONTACT
                    </NavLink>
                </h1>
            </ul>
        </div>
    )
}

export default Navlinks
