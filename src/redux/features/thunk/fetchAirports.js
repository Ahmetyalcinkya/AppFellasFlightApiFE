import { AxiosWithAuth } from "../../../utils/AxiosWithAuth";
import { fetchStates } from "../../../utils/fetchStates";
import { changeFetchState, setAirports } from "../airport/airportSlice";

export const fetchAllAirports = () => (dispatch) => {
    dispatch(changeFetchState(fetchStates.FETHING));
    AxiosWithAuth()
        .get("airport/all")
        .then((response) => {
            dispatch(setAirports(response.data))
            dispatch(changeFetchState(fetchStates.FETCHED));
        })
        .catch((error) => {
            console.log(error);
            dispatch(changeFetchState(fetchStates.FETCH_FAILED));
        });
}