import React from "react";
import { Link } from "react-router-dom";
import style from "./CardPais.module.css"

function CardPais({id,name,continent,flagsImg}){

    return(
    <div className = {style.container}>
         <Link to={`/countries/${id}`} >
          <img className = {style.img} value="info" src = {flagsImg} alt="img not found" />
        </Link>
            <h2 className = {style.nom}>{name}</h2>
            <h3 className = {style.con}>{continent}</h3>
        </div>
    )} 

export default CardPais;