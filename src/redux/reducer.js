const initialState = {
    currentUser: null,
    currentRoute: null,
    headers: {"Content-Type": "application/json", Accept: "application/json"}
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {...state, currentUser: action.payload}
        case 'SET_ROUTE':
            return {...state, currentRoute: action.payload}
        default:
            return state
    }
}

export default reducer
