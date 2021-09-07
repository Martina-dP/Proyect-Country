import React from "react";

function Paginado ({countriesPerPage, allCountries, paginado}) { //declaro paginado
    const pageNum = []
    for (let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++) { //divide todos los paises por cantidad de paises que quiero en cada pag
        pageNum.push(i)
    }

    return (
        <nav>
            <ul>
                {pageNum &&
                    pageNum.map(num => (
                        <a onClick = {() => paginado(num)}  key = {num} > {num} </a>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Paginado;