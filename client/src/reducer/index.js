import { 
    GET_COUNTRIES,
    GET_COUNTRIES_BY_QUERY,
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITY,
    GET_ACTIVITY,
    ORDER_AFABETICAMENTE,
    ORDER_POBLACION,

} from "../actions/index"

const initialState = {
    countries : [],
    allCountries : [],
    activities : [],
    allActivities : [],
  };

function rootReducer (state = initialState, {type, payload}) {
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
        case FILTER_BY_CONTINENT :
            const allCountries = state.allCountries;
            const continentFilter = payload === "All" ? allCountries : allCountries.filter(e => e.continent === payload)
            return {
                ...state,
                countries : continentFilter
            }
        case FILTER_BY_ACTIVITY :
            const allActivities = state.allCountries;
            const activityFilter = payload === "All" ? allActivities : allActivities.filter(e => e.name === payload)
            return {
                ...state,
                countries : activityFilter
            }
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
                const orderSort = payload === "mayorP" ?
                    state.countries.sort(function (a, b) {
                        if (a.population > b.population){
                            return 1;
                        }
                        if (a.name < b.name){
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
            default: return state;
    }
}

export default rootReducer;