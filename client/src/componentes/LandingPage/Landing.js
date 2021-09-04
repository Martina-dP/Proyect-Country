import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css"

function landingPage () {
    return (
        <div className = {style.principal}>
        <div >
            <h1>Create your own adventure</h1>
            <Link to = "/home">
                <button>Go!</button>
            </Link>
        </div>
        </div>
    )
}

export default landingPage;