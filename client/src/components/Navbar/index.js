import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        const transBlue = {
            backgroundColor: "rgba(0,123,255,0.5)",
            boxShadow: "rgba(0,0,0,0.5) 0 0 5px",
            textShadow: "rgba(0,0,0,1) 1px 1px 1px",
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={transBlue}>
                <Link className="navbar-brand text-white font-weight-bold" to="/">Restaurant Roulette</Link>
                <ul className="nav navbar-nav ml-auto d-block">
                    <li className="nav-item active d-inline-block"><Link className="nav-link px-3" to="/app">Home</Link></li>
                    <li className="nav-item d-inline-block px-3 text-white">|</li>
                    {/* <li className="nav-item active d-inline-block"><Link className="nav-link px-3" to="/profile">My Profile</Link></li> */}
                    {/* <li className="nav-item d-inline-block px-3 text-white">|</li> */}
                    <li className="nav-item active d-inline-block"><Link className="nav-link px-3" to="/">Log Out</Link></li>
                </ul>
            </nav>
        )
    };
}

export default NavBar;