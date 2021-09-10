import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css"
import video2 from "../../img/video2.mp4"

function landingPage () {
    return (
        <div>
            <div className = {style.principal}>
                <h1 className = {style.t}>Create your own adventure</h1>
                <Link to = "/home">
                    <button className = {style.g} >Go!</button>
                </Link>
                <p className = {style.p}> In this space you will be able to know the most basic details of the countries of the world
                to be able to desing an extraordinary adventure at ease</p>
            </div>
            <div>
                <video autoPlay loop muted
                   style ={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      zIndex: "1"
                  }}
                >
                  <source src = {video2} type = "video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default landingPage;