import { AxiosWithAuth } from "../../../utils/AxiosWithAuth";
import { fetchStates } from "../../../utils/fetchStates";
import { changeFetchState, setFlights } from "../flight/flightSlice";

export const fetchFilteredFlightsByAirline = (data) => (dispatch) => { // AIRLINE ""
    dispatch(changeFetchState(fetchStates.FETCHING));
    AxiosWithAuth()
        .get(`flight/filter-flights?startDate=&endDate=&startTime=${data.startTime}&endTime=${data.endTime}&airline=${data.airline}&property=DATE&direction=${data.direction}&departureAirportIATA=&arrivalAirportIATA=`)
        .then((response) => {
            dispatch(setFlights(response.data))
            dispatch(changeFetchState(fetchStates.FETCHED));
        })
        .catch((error) => {
            console.log(error);
            dispatch(changeFetchState(fetchStates.FETCH_FAILED));
        });
}