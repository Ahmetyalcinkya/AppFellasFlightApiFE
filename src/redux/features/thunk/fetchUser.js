import { AxiosWithAuth } from "../../../utils/AxiosWithAuth";
import { fetchStates } from "../../../utils/fetchStates";
import { changeFetchState, setUser } from "../user/userSlice";

export const fetchUser = (data) => (dispatch) => {
    dispatch(changeFetchState(fetchStates.FETCHING));
    AxiosWithAuth()
        .post("auth/login", data)
        .then((response) => {
            dispatch(setUser(response.data))
            localStorage.setItem("token", response.data.token);
            dispatch(changeFetchState(fetchStates.FETCHED));
        })
        .catch((error) => {
            console.log(error);
            dispatch(changeFetchState(fetchStates.FETCH_FAILED));
        });
}