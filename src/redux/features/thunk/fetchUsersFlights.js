import { AxiosWithAuth } from "../../../utils/AxiosWithAuth";
import { fetchStates } from "../../../utils/fetchStates";
import { changeFetchState, setUsersFlights } from "../flight/flightSlice";

export const fetchUsersFlights = () => (dispatch) => {
    dispatch(changeFetchState(fetchStates.FETCHING));
    AxiosWithAuth()
        .get("flight/users-flights") // Users flight not fetched due to id issue. Fix this;
        .then((response) => {
            console.log(response.data)
            // dispatch(setUsersFlights(response.data))
            dispatch(changeFetchState(fetchStates.FETCHED));
        })
        .catch((error) => {
            console.log(error);
            dispatch(changeFetchState(fetchStates.FETCH_FAILED));
        });
}