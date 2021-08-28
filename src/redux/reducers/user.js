
const initialState = {
  customers: []
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET__USER": {
      return {
        ...state,
        customers: action.payload,
      }
    }
    case "ADD__USER": {
      const newCustomers = [...state.customers]
      newCustomers.push(action.payload)
      return {
        ...state,
        customers: newCustomers
      }
    }
    case "DELETE__USER": {
      const newCustomers = [...state.customers]
      console.log(action.payload)
      const fileter = newCustomers.filter((cus, index) => cus.id !== action.payload)

      return {
        ...state,
        customers: fileter
      }
    }
    default:
      return state
  }
}

export default userReducer