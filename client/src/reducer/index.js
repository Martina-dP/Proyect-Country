import { 
    GET_COUNTRIES,
    GET_COUNTRIES_BY_QUERY,
    GET_COUNTRIES_BY_Id,
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITY,
    GET_ACTIVITY,
    ORDER_AFABETICAMENTE,
    ORDER_POBLACION,
    POST_ACTIVITY,
    
} from "../actions/index"

const initialState = {
    countries : [],
    allCountries : [],
    activities : [],
    allActivities : [],
    detail :{},
  };

function rootReducer (state = initialState, { type, payload }) {
    switch(type) {
        case GET_COUNTRIES :
            return {
                ...state,
                countries : payload,
                allCountries : payload
            }
        case GET_ACTIVITY :
             return {
                ...state,
                activities : payload,
                allActivities : payload
            }
        case GET_COUNTRIES_BY_QUERY :
            return {
                ...state,
                countries : payload
            }
        case POST_ACTIVITY :
            return {
                ...state,
                activities : payload,
            }
        case FILTER_BY_CONTINENT :
            const allPaises = state.allCountries;
            const continentFilter = payload === "All" ? allPaises : allPaises.filter(e => e.continent === payload)
            return {
                ...state,
                countries : continentFilter
            }
        case FILTER_BY_ACTIVITY :
            const prueba = state.allCountries.filter(e => {
                var y = e.activities.find(
                    a => a.name.toLowerCase() === payload.toLowerCase()
                 )
                 return y !== undefined
                })
            //  console.log(prueba)
            // const activityFilter = action.payload === "All" ? prueba : prueba.filter(e => e.name === action.payload)
            // const final = activityFilter.map(e => 
            //     e.countries)
            // console.log(activityFilter)
            return {
                ...state,
                countries : prueba
            };
        case   ORDER_AFABETICAMENTE :
            const ordSorted = payload === "alf" ?
                state.countries.sort(function (a, b) {
                    if (a.name > b.name){
                        return 1;
                    }
                    if (a.name < b.name){
                        return -1;
                    }
                    return 0; 
                }) : 
                state.countries.sort(function (a, b) {
                    if (b.name > a.name){
                        return 1;
                    }
                    if (b.name < a.name){
                        return -1;
                    }
                    return 0; 
                }) 
            return {
                ...state,
                countries : ordSorted
            }
        case ORDER_POBLACION :
            const orderSort = payload === "menorP" ?
                state.countries.sort(function (a, b) {
                    if (a.population > b.population){
                        return 1;
                    }
                    if (a.population < b.population){
                        return -1;
                    }
                    return 0; 
                }) : 
                state.countries.sort(function (a, b) {
                    if (b.population > a.population){
                        return 1;
                    }
                    if (b.population < a.population){
                        return -1;
                    }
                    return 0; 
                }) 
            return {
                ...state,
                countries : orderSort
            }
        case GET_COUNTRIES_BY_Id :
            return {
                ...state,
                detail : payload
            }
            default: return state;
    }
}

export default rootReducer;
