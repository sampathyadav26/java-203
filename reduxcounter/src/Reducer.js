//Declare initial state value
let initialState = { count: 0 }

function Reducer(state = initialState, action) {
    if (action.type === "INCREAMENT") {
        return {
            count: state.count + 1
        };
    }
    if (action.type === "DECREAMENT") {
        return {
            count: state.count - 1
        };
    }
    return state;
}

export default Reducer

