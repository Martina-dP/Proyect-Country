import React from "react";
import style from "./paginado.module.css"

function Paginado ({countriesPerPage, allCountries, paginado}) { //declaro paginado
    const pageNum = []
    for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) { //divide todos los paises por cantidad de paises que quiero en cada pag
        pageNum.push(i)
    }

    return (
        <nav  className = {style.paginado}>
            <ul  className = {style.p}> 
                {pageNum &&
                    pageNum.map(num => (
                        <button className = {style.pag} onClick = {() => paginado(num)}  key = {num} > {num} </button>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Paginado;
