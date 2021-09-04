import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
// export const  = "";
// export const  = "";
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
    var json = await axios.get(`/countries?name=${query}`)
      return dispatch({
        type : "GET_COUNTRIES_BY_QUERY",
        payload : json.data
        })
    }
};

export function getDetail() {
    
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