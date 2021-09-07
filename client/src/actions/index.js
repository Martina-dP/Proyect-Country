import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_BY_QUERY = "GET_COUNTRIES_BY_QUERY";
// export const GET_COUNTRIES_BY_Id = "GET_COUNTRIES_BY_Id";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const ORDER_AFABETICAMENTE = "ORDER_AFABETICAMENTE";
export const ORDER_POBLACION  = "ORDER_POBLACION";


export function getCountries () {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/countries")
        return dispatch({
            type : "GET_COUNTRIES",
            payload : json.data
        })

    }
}

export function getActivities () {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/activity")
        return dispatch({
            type : "GET_ACTIVITY",
            payload : json.data
        })

    }
}

export function getCountriesByQuery(query) {
    return async function (dispatch) {
    var json = await axios.get(`http://localhost:3001/countries?name=${query}`)
      return dispatch({
        type : "GET_COUNTRIES_BY_QUERY",
        payload : json.data
        })
    }
};

// export function getDetail(id) {
//     return async function (dispatch) {
//         var json = await axios.get(`http://localhost:3001/countries/${id}`)
//           return dispatch({
//             type : "GET_COUNTRIES_BY_Id",
//             payload : json.data
//             })
//         }
// };

export function filterContinente(payload) {
    return {
        type: "FILTER_BY_CONTINENT",
        payload
        } 
};

export function orderPoblacion(payload) {
    console.log(payload)
    return {
        type: "ORDER_POBLACION",
        payload
        } 
};

export function orderAlfabeticamente(payload) {
    return {
        type: "ORDER_AFABETICAMENTE",
        payload
        } 
};

export function filterActividad(payload) {
    return {
        type: "FILTER_BY_ACTIVITY",
        payload
        } 
};

export function deleteActividad() {
    
};