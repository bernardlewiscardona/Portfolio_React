import React from 'react'

export default function Navbar() {
return (
        <nav className="navbar navbar-expand-lg navbar-light p-3">
            <div className="container">
                <a className="navbar-brand fs-2" href="/">BLC.</a>
                <div className="navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item">
                            <a className="nav-link" href="#project">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
)
}
