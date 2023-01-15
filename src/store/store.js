import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

/* Import Reducers */ 
import { 
    provider, 
    tokens,
    exchange 
} from './reducers'

/* Create Function to Store Reducers */ 
const reducer = combineReducers({
    provider,
    tokens,
    exchange
})

/* Store Config Default Values */ 
const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store