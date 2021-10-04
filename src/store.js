import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { fetchCryptoReducer } from "./reducers/cryptoReducers";

const reducer = combineReducers({
	fetchCrypto: fetchCryptoReducer,
});

const middleware = [thunk];

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
