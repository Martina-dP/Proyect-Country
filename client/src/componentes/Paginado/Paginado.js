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
                        <a onClick = {() => paginado(num)}> {num} </a>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Paginado;

 {/* <>
        {allCountries.length > 0 ?
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
         </div> */}