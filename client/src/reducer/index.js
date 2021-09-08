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
    details : [],
  };

function rootReducer (state = initialState, action) {
    switch(action.type) {
        case GET_COUNTRIES :
            return {
                ...state,
                countries : action.payload,
                allCountries : action.payload
            }
        case GET_ACTIVITY :
             return {
                ...state,
                activities : action.payload,
                allActivities : action.payload
            }
        case GET_COUNTRIES_BY_QUERY :
            return {
                ...state,
                countries : action.payload
            }
        case POST_ACTIVITY :
            return {
                ...state,
                activities : action.payload
            }
        case FILTER_BY_CONTINENT :
            const allPaises = state.allCountries;
            const continentFilter = action.payload === "All" ? allPaises : allPaises.filter(e => e.continent === action.payload)
            return {
                ...state,
                countries : continentFilter
            }
        case FILTER_BY_ACTIVITY :
            const prueba = state.allCountries.filter(e => {
                var y = e.activities.find(
                    a => a.name.toLowerCase() === action.payload.toLowerCase()
                )
                return y !== undefined;
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
            const ordSorted = action.payload === "alf" ?
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
            const orderSort = action.payload === "menorP" ?
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
                details : action.payload
            }
            default: return state;
    }
}

export default rootReducer;
