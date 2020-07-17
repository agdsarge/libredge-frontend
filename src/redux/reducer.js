const initialState = {
    currentUser: null,
    currentRoute: 'game'
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        //case x:
            //return y
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
