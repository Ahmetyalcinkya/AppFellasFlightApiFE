import { AxiosWithAuth } from "../../../utils/AxiosWithAuth";
import { fetchStates } from "../../../utils/fetchStates";
import { changeFetchState, setUser } from "../user/userSlice";

export const fetchLoggedInUser = () => (dispatch) => {
    dispatch(changeFetchState(fetchStates.FETCHING));
    AxiosWithAuth()
        .get("auth/verify")
        .then((response) => {
            dispatch(setUser(response.data))
            localStorage.setItem("token", response.data.token);
            dispatch(changeFetchState(fetchStates.FETCHED));
        })
        .catch((error) => {
            console.log(error);
            if(error?.response?.data?.status === 401) {
                localStorage.removeItem("token")
            }
            if(error.message === "Network Error"){
                console.log("İnternet bağlantınızı kontrol ediniz.")
            }
            dispatch(changeFetchState(fetchStates.FETCH_FAILED));
        });
}