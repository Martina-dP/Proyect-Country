import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../actions/index"
import CardPais from '../CardPais/CardPais';
import { Link } from "react-router-dom";
import Paginado from '../Paginado/Paginado';

export function Home() {
  
    const allCountries = useSelector ((state) => state.countries) //es lo mismo que un mapStateToProps, me trae todo lo que esta en el stado de countries
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

    // function handleClick(e) {
    //     e.preventDefault();
    //     dispatch(getCountries());
    // }

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
        <Paginado
        countriesPerPage = {countriesPerPage}
        allCountries = {allCountries.length}
        paginado = {paginado}
        />
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
        </div>
       
         )
    
};

export default Home;