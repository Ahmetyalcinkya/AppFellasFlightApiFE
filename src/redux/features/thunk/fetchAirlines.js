import { AxiosWithAuth } from "../../../utils/AxiosWithAuth";
import { fetchStates } from "../../../utils/fetchStates";
import { changeFetchState, setAirlines } from "../airline/airlineSlice";

export const fetchAllAirlines = () => (dispatch) => {
    dispatch(changeFetchState(fetchStates.FETHING));
    AxiosWithAuth()
        .get("airline/all")
        .then((response) => {
            dispatch(setAirlines(response.data))
            dispatch(changeFetchState(fetchStates.FETCHED));
        })
        .catch((error) => {
            console.log(error);
            dispatch(changeFetchState(fetchStates.FETCH_FAILED));
        });
}