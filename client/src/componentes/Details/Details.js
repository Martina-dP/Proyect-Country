import React from "react";
import { useEffect } from "react";
import { useDispatch, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail } from "../../actions"

export default function Details (props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    },[dispatch])

    const myCountry = useSelector( state = state.detail)

    // return(
    // //     <div>
    // //         {
    // //             myCountry.length > 0 ?
    // //             <div>

    // //             </div>
    // //         }
    // //     </div>
    // // )
}

// function ContactDetail({ name , flagsImg, continent, capital, subregión, area, population, activity }) {
//     return (
//         <div>
//              <img src = {flagsImg} alt="img not found" />
//             <span>{name}</span>
//             <span>{continent}</span>
//             <span>{capital}</span>
//             <span>{subregión}</span>
//             <span>{area}</span>
//             <span>{population}</span>
//         </div>
// )}