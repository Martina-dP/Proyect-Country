import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../actions/index"
import CardPais from '../CardPais/CardPais';
import { Link } from "react-router-dom";

export function Home() {
  
    const allCountries = useSelector ((state) => state.countries) //es lo mismo que un mapStateToProps, me trae todo lo que esta en el stado de countries


    const dispatch = useDispatch()

    useEffect(() =>{  //nos traemos los paises del estado al montarlo 
        dispatch(getCountries()); //equivale a hacer mapDispatchToProps
    },[dispatch]) //el array es para pasarle cuano queremos que suceda

    return(
        <div>
            <div>
            <h1> Your adventure</h1>
            </div>
            <div>
                <Link to="/activity"> Create Activity</Link>
            </div>
            <br/>
            <div>
                <select>
                    <option value="alf"> Order by A - Z</option>
                    <option value="notAlf"> Order by Z - A</option>
                </select>
                <select>
                    <option value="continent"> Order by Continent</option>
                    <option value="europa"> Europe </option>
                    <option value="america"> Americas </option>
                    <option value="asia"> Asia </option>
                    <option value="oceania"> Oceania </option>
                    <option value="africa"> Africa </option>
                    <option value="polar"> Polar </option>
                </select>
                <select>
                    <option value="act"> Order by Activity</option>
                </select>
                <select>
                    <option value="popu"> Order by Population</option>
                </select>
            </div>

        <>{ allCountries.length > 0 ?
            
            <div>
            {allCountries.map((country) => {
                console.log(allCountries)
                return (
                    <CardPais
                    key = {country.id}
                    name = {country.name}
                    id = {country.id}
                    flagsImg = {country.flagsImg}
                    continent = {country.continent}
                    />
                );
            })}
            </div>
        :
        <h1> Loading... </h1>
         }    
         </>
         </div>
         )
    
};

export default Home;