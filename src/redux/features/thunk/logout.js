import { AxiosWithAuth } from "../../../utils/AxiosWithAuth";
import { fetchStates } from "../../../utils/fetchStates";
import { changeFetchState, setUser } from "../user/userSlice";

export const logout = () => (dispatch) => {
    dispatch(changeFetchState(fetchStates.FETCHING));
    AxiosWithAuth()
        .post("auth/logout")
        .then(() => {
            dispatch(setUser({}))
            localStorage.removeItem("token");
            dispatch(changeFetchState(fetchStates.NOT_FETCHED));
            window.location.reload();
        })
        .catch((error) => {
            console.log(error);
            dispatch(changeFetchState(fetchStates.FETCH_FAILED));
        });
}