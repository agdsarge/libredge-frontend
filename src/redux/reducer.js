const initialState = {
    currentUser: null,
    currentRoute: 'login',
    headers: {"Content-Type": "application/json", Accept: "application/json"}
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {...state, currentUser: action.payload}
        default:
            return state
    }
}

export default reducer

// const initialState = {
//   count: 50
// }
//
// const reducer = (oldState = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT_COUNTER":
//       return {count: oldState.count + action.number}
//     case "DECREMENT_COUNTER":
//       return {count: oldState.count - action.number}
//     default:
//       return oldState
//   }
// }
//
// export default reducer
