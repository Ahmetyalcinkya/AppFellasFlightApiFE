import { AxiosWithAuth } from "../../../utils/AxiosWithAuth";
import { fetchStates } from "../../../utils/fetchStates";
import { changeFetchState, setFlights } from "../flight/flightSlice";

export const fetchFilteredFlightsByAirport = (data) => (dispatch) => {
    dispatch(changeFetchState(fetchStates.FETCHING));
    AxiosWithAuth()
        .get(`flight/filter-flights?startDate=${data.startDate}&endDate=${data.endDate}&startTime=&endTime=&airline=&property=DATE&direction=DESC&departureAirportIATA=${data.departureIATACode}&arrivalAirportIATA=${data.arrivalIATACode}`)
        .then((response) => {
            dispatch(setFlights(response.data))
            dispatch(changeFetchState(fetchStates.FETCHED));
        })
        .catch((error) => {
            console.log(error);
            dispatch(changeFetchState(fetchStates.FETCH_FAILED));
        });
}