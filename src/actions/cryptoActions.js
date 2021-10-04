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
				"x-rapidapi-host": "coinranking1.p.rapidapi.com",
				"x-rapidapi-key": "cd8ac12077msh96c50d5dac6c1e6p193711jsncfc3e8022b40",
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
