import axios from "axios";
import {
	FETCH_CRYPTO_FAIL,
	FETCH_CRYPTO_REQUEST,
	FETCH_CRYPTO_SUCCESS,
} from "../constants/cryptoConstants";

export const cryptoFetch = () => async (dispatch) => {
	try {
		dispatch({
			type: FETCH_CRYPTO_REQUEST,
		});

		const config = {
			headers: {
				"x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST,
				"x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
			},
		};

		const { data } = await axios.get(
			`https://coinranking1.p.rapidapi.com/coins`,
			config
		);

		dispatch({
			type: FETCH_CRYPTO_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: FETCH_CRYPTO_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
