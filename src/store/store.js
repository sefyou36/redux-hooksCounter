import { legacy_createStore as createStore } from "redux";
const initialState ={
    counter :0 
}

const reducerFn = (state = initialState,action)=>{
    switch (action.type) {
        case "INC":
            return {...state,counter : state.counter + 1};
        case "DEC":
            return {...state,counter : state.counter - 1};
        case "TEN":
            return {...state,counter : state.counter + 10};
            case "ADD":
                return {...state, counter: state.counter + action.payload};
        case "RES":
            return {...initialState};
    
        default:
            return state;
    }
}

const store = createStore(reducerFn);

export default store

