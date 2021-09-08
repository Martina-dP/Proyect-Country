import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { postActivities, getCountries } from "../../actions"
import Nav from "../Nav/Nav";

function ActivitiesCreated(){
    const dispatch = useDispatch();
    const history = useHistory();
    const activities = useSelector((state) => state.activities)
    const countries = useSelector((state) => state.countries)
    const [error, setError] = useState({});

useEffect(() => {
    dispatch(getCountries()); 
    },[dispatch])


const [input, setInput] = useState({
    name : "",
    severity : "",
    duration : "",
    season : "" ,
})

function validate(input) {
    let errores = {};
    if (!input.name) {
        errores.name = "Se requiere un Nombre valido";
    } else if (!input.season){
        errores.season = "Se requiere un season"
    }
    return errores;
}

function handleChange(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
    setError(validate({
        ...input,
        [e.target.name] : e.target.value
    }))
}

function hanldeSelect(e) {
    setInput({
        ...input,
        type : [input.season, e.target.value]
    })
}

function hanleSubmit(e){
    e.preventDefault()
    dispatch(postActivities(input))
    alert("Activitie Created")
    setInput({
        name : "",
        severity : "",
        duration : "",
        season : "",
    })
    history.push("/home")
}

return (
    <div>
        <Nav/>
        <Link to = "/home">
            <button> Back to Home </button>
        </Link>
        <form onSubmit = {e => hanleSubmit(e)} >
            <div>
                <label> Activity : </label>
                <input onChange = {e => handleChange(e) }
                type = "text"
                value = {input.name}
                name = "name"
                />
            </div>
            <div>
                <label> Severity : </label>
                <input onChange = {e => handleChange(e) }
                type = "text"
                placeholder="1 a 5"
                value = {input.severity}
                name = "severity"
                />
            </div>
            <div>
                <label> Duration : </label>
                <input onChange = {e => handleChange(e) }
                type = "text"
                placeholder="In minutes"
                value = {input.duration}
                name = "duration"
                />
            </div>
            <div>
            <label> Season : </label>
            <select onChange = {e => handleChange(e)} >
                <option value="invierno"> winter </option>
                <option value="verano"> summer </option>
                <option value="otoño"> spring </option>
                <option value="primavera"> autumn </option>
            </select>
            </div>
            <div>
            <label> Country : </label>
            <select onChange = {e => hanldeSelect(e) } >
                {countries.map(c => (
                    <option value = {c.name} > {c.name} </option>
                ))}
            </select>
            </div>
            <button type = "submit"> Create </button>
        </form>
    </div>
)
};

export default ActivitiesCreated;