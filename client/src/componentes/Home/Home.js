import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, filterContinente, filterActividad } from "../../actions/index"
import CardPais from '../CardPais/CardPais';
import { Link } from "react-router-dom";
import Paginado from '../Paginado/Paginado';
import style from "./Home.module.css"

export function Home() {
  
    const allCountries = useSelector ((state) => state.countries) //es lo mismo que un mapStateToProps, me trae todo lo que esta en el stado de countries
    const allActivities = useSelector ((state) => state.activities)
    const [currentPage, setCurrentPage] = useState(1); //currentPage = pagina actual
    const [countriesPerPage, setCountriesPerPage] = useState(10) //countriesPerPAge = paises por pagina, el 10 es de la cantidad de paises quiero que se muestren
    const indexOfLastCountries = currentPage * countriesPerPage
    const indexOfFirstCountries = indexOfLastCountries - countriesPerPage
    const currentCountries = allCountries.slice(indexOfFirstCountries, indexOfLastCountries) //slice = toma una parte del arreglo depndiedo lo que le pases por parametro

const paginado = (pageNum) => {
    setCurrentPage(pageNum)
}

    const dispatch = useDispatch()

    useEffect(() =>{  //nos traemos los paises del estado al montarlo 
        dispatch(getCountries()); //equivale a hacer mapDispatchToProps
    },[dispatch]) //el array es para pasarle cuano queremos que suceda


    function handleFilterContinent(e) {
        dispatch(filterContinente(e.target.value))
    }

    function handleFilterActivity(e) {
        dispatch(filterActividad(e.target.value))
    }

    return(
        <div>
            <div>
            <h1> Your adventure</h1>
            </div>
            <div>
                <Link to="/activity"> Create Activity</Link>
            </div>
            <div>
            <input  type="text"  placeholder="Search Country..." />
            <button type="submit">
                Buscar
            </button>
            </div>
            <br/>
            <div>
                <select onChange = {e => handleFilterContinent(e)} >
                    <option value="All"> All Countries </option>
                    <option value="Europe"> Europe </option>
                    <option value="Americas"> Americas </option>
                    <option value="Asia"> Asia </option>
                    <option value="Oceania"> Oceania </option>
                    <option value="Africa"> Africa </option>
                    <option value="Polar"> Polar </option>
                </select>
                <select  onChange = {e => handleFilterActivity(e)} >
                    <option value="All"> All Activities</option>
                    <option value="Go to the Beach"> Go to the Beach </option>
                    <option value="Ski"> Ski </option>
                    <option value="Visit Museums"> Visit Museums </option>
                </select>
                <select>
                    <option value="popu"> Order by Population</option>
                </select>
                <select>
                    <option value="alf"> Order by A - Z</option>
                    <option value="notAlf"> Order by Z - A</option>
                </select>
            </div>
            <ul className = {style.container}>
            {currentCountries?.map((country) => {
         return (
            <CardPais
            key = {country.id}
            name = {country.name}
            id = {country.id}
            flagsImg = {country.flagsImg}
            continent = {country.continent}
            />
        );
         }
        ) }
        </ul>
        <Paginado
        countriesPerPage = {countriesPerPage}
        allCountries = {allCountries.length}
        paginado = {paginado}
        />
       
        </div>
       
         )
    
};

export default Home;