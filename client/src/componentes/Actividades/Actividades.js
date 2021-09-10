import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { postActivities, getCountries } from "../../actions"
import Nav from "../Nav/Nav";
import style from "./Actividades.module.css"

function ActivitiesCreated(){
    const dispatch = useDispatch();
    const history = useHistory();
    const activities = useSelector((state) => state.activities)
    const countries = useSelector((state) => state.countries)
    const [errors, setError] = useState({});

useEffect(() => {
    dispatch(getCountries()); 
    },[dispatch])


const [input, setInput] = useState({
    name : "",
    difficulty : "",
    duration : "",
    season : "" ,
    country : [],
})

function validate(input) {
    const errors = {};
    if (!input.name) {
        errors.name = "Se requiere una Actividad";
    } if (!input.season){
        errors.season = "Se requiere un season"
    }
    return errors;
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

function handelSelect(e) {
    setInput({
        ...input,
        country : [...input.country, e.target.value],
    })
}

function handleDelete(el) {
    setInput({
        ...input,
        country : input.country.filter(c => c !== el)
    })
}

function handleSubmit(e){
    e.preventDefault()
    dispatch(postActivities(input))
    alert("Activitie Created")
    setInput({
        name : "",
        difficulty : "",
        duration : "",
        season : "",
        country : []
    })
    history.push("/home")
}

return (
    <div className = {style.total}>
        <Nav/>
        <Link to = "/home">
            <button className = {style.bo}> Back to Home </button>
        </Link>
        <form className = {style.cointener} onSubmit = {e => handleSubmit(e)} >
            <div className = {style.a}>
                <label> Activity : </label>
                <input 
                type = "text"
                value = {input.name}
                name = "name"
                onChange = {e => handleChange(e) }
                />
                    {errors.name && (
                        <p> {errors.name} </p>
                    )}
            </div>
            <div className = {style.di} >
                <label> Difficulty : </label>
                <select name = "difficulty" onChange = {e => handleChange(e)} >
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
            </select>
            </div>
            <div className = {style.d} >
                <label> Duration : </label>
                <input onChange = {e => handleChange(e) }
                type = "text"
                placeholder="In minutes"
                value = {input.duration}
                name = "duration"
                />
            </div>
            <div className = {style.s}>
            <label> Season : </label>
            <select name = "season" onChange = {e => handleChange(e)} >
                <option value="winter"> winter </option>
                <option value="summer"> summer </option>
                <option value="spring"> spring </option>
                <option value="autumn"> autumn </option>
            </select>
                {errors.season && (
                        <p> {errors.season} </p>
                    )}
            </div>
            <div className = {style.p} >
            <label> Country : </label>
                <select onChange = {e => handelSelect(e) } >
                {countries.map(c => (
                    <option value = {c.id} > {c.name} </option>
                ))}
                </select> 
            </div>
            <div>
        {input.country.map((el) =>
            <div className = {style.b} >
                <p>{el}</p>
                <button onClick = {() => handleDelete(el)}> x </button>
            </div>
            )}
        </div>
            <button className = {style.c} type = "submit"> Create </button>
        </form>
       
    </div>
)
};

export default ActivitiesCreated;


