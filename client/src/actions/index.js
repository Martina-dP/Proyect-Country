import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_BY_QUERY = "GET_COUNTRIES_BY_QUERY";
// export const GET_COUNTRIES_BY_Id = "GET_COUNTRIES_BY_Id";
// export const  = "";
// export const  = "";


export function getCountries () {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/countries")
        return dispatch({
            type : "GET_COUNTRIES",
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

export function getDetail(id) {
    return async function (dispatch) {
        var json = await axios.get(`/countries/${id}`)
          return dispatch({
            type : "GET_COUNTRIES_BY_Id",
            payload : json.data
            })
        }
};

export function filterContinente() {
    
};

export function orderPoblacion() {
    
};

export function orderAlfabeticamente() {
    
};

export function filterActividad() {
    
};

export function deleteActividad() {
    
};