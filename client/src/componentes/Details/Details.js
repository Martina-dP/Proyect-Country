import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; 
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDetail } from "../../actions/index"
import style from "./Detail.module.css"

export default function Detail(props) {
   
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    },[dispatch])

    const myCountry = useSelector ((state) => state.detail)

    return(
        <div className = {style.fondo}>
              <img className = {style.img} src = {myCountry.flagsImg} alt = "img not found" />
            <div>
                <div className = {style.ci} >
                    <h2 className = {style.ti}> {myCountry.name}</h2>
                    <h3 className = {style.co}> Continent : {myCountry.continent}</h3>
                    <h3 className = {style.ca}> Capital : {myCountry.capital}</h3>
                    <h3 className = {style.su}> Subregión : {myCountry.subregión}</h3>
                    <h4 className = {style.ar}> Area : {myCountry.area}</h4>
                    <h5 className = {style.hid}> id : {myCountry.id}</h5>
                </div> 
                <div className = {style.ai}>
                     {myCountry.activities?.map(act => (
                        <div className = {style.in}>
                             <h3> Activities : </h3>
                            <h4>Name : {act.name}</h4>
                            <div className = {style.data}>
                                <h4>Difficulty : {act.difficulty}</h4>
                                <h4>Duration : {act.duration}</h4>
                                <h4>Season : {act.season}</h4> 
                            </div>
                        </div>
                    ))}
                </div>
                </div> 
            <Link to = "/home">
                <button className = {style.bh} > Back to Home </button>
            </Link>
        </div>
    )
}

