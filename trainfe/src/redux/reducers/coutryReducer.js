const initialState = {
  countryList: []
}

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET__COUNTRY": {
      return {
        ...state,
        countryList: action.payload
      }
    }
    default: return state
  }
}

export default countryReducer