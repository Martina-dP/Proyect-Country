import { 
    GET_COUNTRIES,
    GET_COUNTRIES_BY_QUERY,
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITY,
    GET_ACTIVITY,

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
            const allActivities = state.activities;
            const activityFilter = payload === "All" ? allActivities : allActivities.filter(e => e.name === payload)
            return {
                ...state,
                activities : activityFilter
            }
            default: return state;
    }
}

export default rootReducer;