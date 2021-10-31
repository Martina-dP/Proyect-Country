import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const GET_COUNTRIES_BY_QUERY = "GET_COUNTRIES_BY_QUERY";
export const GET_COUNTRIES_BY_Id = "GET_COUNTRIES_BY_Id";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const ORDER_AFABETICAMENTE = "ORDER_AFABETICAMENTE";
export const ORDER_AREA  = "ORDER_AREA";


export function getCountries () {
    return async function(dispatch){
        var json = await axios.get("/countries")
        return dispatch({
            type : "GET_COUNTRIES",
            payload : json.data
        })
    }
}

export function getActivity () {
    return async function(dispatch){
        const json = await axios.get("/activities")
        return dispatch({
            type : "GET_ACTIVITY",
            payload : json.data
        })
    }
}

export function postActivities(input) {
    return async function(dispatch){
        var json = await axios.post("/activity", input)
        console.log(json)
        return dispatch({
            type : "POST_ACTIVITY",
            payload : json.data
        })
    }
}

export function getCountriesByQuery(query) {
    return async function (dispatch) {
    var json = await axios.get(`/countries?name=${query}`)
      return dispatch({
        type : "GET_COUNTRIES_BY_QUERY",
        payload : json.data
        })
    }
};

export function getDetail(id) {
    return async function (dispatch) {
        var json = await axios.get(`/countries/${id}`)
          return dispatch({
            type : "GET_COUNTRIES_BY_Id",
            payload : json.data
            })
        }
};

export function filterContinente(payload) {
    return {
        type: "FILTER_BY_CONTINENT",
        payload
        } 
};

export function orderArea(payload) {
    return {
        type: "ORDER_AREA",
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
