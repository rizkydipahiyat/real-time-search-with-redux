import {
	FETCH_CRYPTO_FAIL,
	FETCH_CRYPTO_REQUEST,
	FETCH_CRYPTO_SUCCESS,
} from "../constants/cryptoConstants";

export const fetchCryptoReducer = (state = { coins: [] }, action) => {
	switch (action.type) {
		case FETCH_CRYPTO_REQUEST:
			return { loading: true, ...state };
		case FETCH_CRYPTO_SUCCESS:
			return {
				loading: false,
				coins: action.payload,
			};
		case FETCH_CRYPTO_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
