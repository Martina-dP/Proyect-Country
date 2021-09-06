import React from "react";
import { Link } from "react-router-dom";
import style from "./CardPais.module.css"

function CardPais({id,name,continent,flagsImg}){
    return(
    <div className = {style.container}>
         <Link to={"/countries/" + id}>
          <img className = {style.img} src = {flagsImg} alt="img not found" />
        </Link>
            <h2>{name}</h2>
            <h3>{continent}</h3>
        </div>
    )} //ACA ESTUVO AGUSTIN ! jajaja ponete a laburar martuuuuuuu

export default CardPais;