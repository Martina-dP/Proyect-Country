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
        <div>
              <img className = {style.img} src = {myCountry.flagsImg} alt = "img not found" />
            <div className = {style.todo} >
                <div className = {style.ci} >
                    <h2> {myCountry.name}</h2>
                    <h3 className = {style.h3}> Continent : {myCountry.continent}</h3>
                    <h3 className = {style.h3}> Capital : {myCountry.capital}</h3>
                    <h3 className = {style.h3}> Subregión : {myCountry.subregión}</h3>
                    <h4> Area : {myCountry.area}</h4>
                    <h4> Population : {myCountry.population}</h4>
                    <h5> id : {myCountry.id}</h5>
                </div> 
                <div className = {style.ai}>
                {/* {activities ? */}
                    <h3> Actividades: </h3>
                     {myCountry.activities?.map(act => (
                        <div className = {style.in}>
                            <h4>Name : {act.name}</h4>
                            <div className = {style.data}>
                                <h4>Difficulty : {act.difficulty}</h4>
                                <h4>Duration : {act.duration}</h4>
                                <h4>Season : {act.season}</h4> 
                            </div>
                        </div>
                    ))}
                 
                {/* // } : <h4>no hay Actividades</h4> */}
                </div>
                </div> 
            {/* <Link to = "/home">
                <button className = {style.bh} > Back to Home </button>
            </Link> */}
        </div>
    )
}

