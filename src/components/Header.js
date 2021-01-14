import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <nav classnamename="navbar navbar-expand-lg navbar-light bg-light">
            <a classnameName="navbar-brand" href="#" >Muhammad Suleman</a>
            <button classname="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span classname="navbar-toggler-icon"></span>
            </button>
            <div classnameName="collapse navbar-collapse" id="navbarSupportedContent">
            <ul classnameName="navbar-nav mr-auto">
                    <li classnameName="nav-item active">
                    <a classname="nav-link" href="#">Home</a>
                    </li>
                    <li classname="nav-item dropdown">
                    <a classname="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Services
                    </a>
                    <div classname="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a classname="dropdown-item" href="#">React</a>
                    <a classname="dropdown-item" href="#">Projects</a>
                    <div classname="dropdown-divider"></div>
                    <a classname="dropdown-item" href="#">Education</a>
                    </div>
                    </li>
                    <li classname="nav-item">
                    <a classname="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <form classname="form-inline my-2 my-lg-0">
                <input classname="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button classname="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Header;