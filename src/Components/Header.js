import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import "./css/style.css";


function Header() {
    var [data, setData] = useState("");
    let navigate = useNavigate();

    function searchData(ev) {
        ev.preventDefault();

        if (data !== "") {
            navigate("/searchdata/" + data)
        } else {
            alert("Movie name required");
        }

    }
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <Link className="navbar-brand text-white" to="/">MovieDB</Link>
                    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon "></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <li class="nav-item ">
                                <Link class="nav-link active text-white" aria-current="page" to="/popular">Popular</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="/toprated">Top Rated</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link text-white" to="/upcoming">Upcoming</Link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search" onSubmit={searchData}>
                            <input
                                onChange={(ev) => { setData(ev.target.value) }}
                                class="form-control me-2" type="search" placeholder="Movie Name" aria-label="Search" />
                            <button class="btn text-white bg-secondary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;