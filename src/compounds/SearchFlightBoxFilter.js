import { faCalendarPlus, faPlaneArrival, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { BRAND } from "../environment/environment";
import { fetchAllAirports } from "../redux/features/thunk/fetchAirports";
import { fetchFilteredFlightsByAirport } from "../redux/features/thunk/fetchFilteredFlights";
import { ArrivalAirportDropdown } from "./ArrivalAirportDropdown";
import { DepartureAirportDropdown } from "./DepartureAirportDropdown";

export const SearchFlightBoxFilter = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [departure, setDeparture] = useState({
        departureAirportIATA: null,
    })
    const [arrival, setArrival] = useState({
        arrivalAirportIATA: null
    })

    const dispatch = useDispatch();
    const { airports } = useSelector((state) => state.airport);

    const handleDeparture = (data) => {
        setDeparture({
            departureAirportIATA: data
        })
    }

    const handleArrival = (data) => {
        setArrival({
            arrivalAirportIATA: data
        })
    }

    const sendFilters = () => {
        const data = {
            departureIATACode: departure.departureAirportIATA,
            arrivalIATACode: arrival.arrivalAirportIATA,
            startDate: startDate?.toLocaleDateString('en-ZA').replace(/\//g, '-'),
            endDate: endDate?.toLocaleDateString('en-ZA').replace(/\//g, '-')
        }
        dispatch(fetchFilteredFlightsByAirport(data));
    }

    useEffect(() => {
        dispatch(fetchAllAirports());
    }, [])
    
    return (
        <div>
            <div className="w-full flex flex-row items-center justify-between py-6 px-6 gap-x-4">
                <div className="w-1/2 flex-1 flex gap-x-2 h-10">
                    <div className="w-1/2 border-brand rounded-l-full border-2 otuline-none overflow-hidden flex flex-row items-center gap-x-2 px-4 py-1">
                        <FontAwesomeIcon icon={faPlaneDeparture} size="lg" color={BRAND} />
                        <DepartureAirportDropdown airports={airports} handleDeparture={handleDeparture} />
                    </div>
                    <div className="w-1/2 border-brand rounded-r-full border-2 otuline-none overflow-hidden flex flex-row items-center px-4 py-1">
                        <FontAwesomeIcon icon={faPlaneArrival} size="lg" color={BRAND} />
                        <ArrivalAirportDropdown airports={airports} handleArrival={handleArrival} />
                    </div>
                </div>
                <div className="w-1/2 flex-1 flex gap-x-2 h-10">
                    <div className="border-brand rounded-l-full border-2 otuline-none overflow-hidden flex flex-row items-center px-4 py-1">
                        <FontAwesomeIcon icon={faCalendarPlus} size="lg" color={BRAND} />
                        <DatePicker
                            className="p-2 w-full h-10 text-base outline-none focus:outline-none"
                            selected={startDate}
                            onChange={(value) => setStartDate(value)}
                        />
                    </div>
                    <div className="border-brand rounded-r-full border-2 otuline-none overflow-hidden flex flex-row items-center px-4 py-1">
                        <FontAwesomeIcon icon={faCalendarPlus} size="lg" color={BRAND} />
                        <DatePicker
                            className="p-2 w-full h-10 text-base outline-none focus:outline-none"
                            selected={endDate}
                            onChange={(value) => setEndDate(value)}
                        />
                    </div>
                </div>
                
            </div>
            <div className="px-4 pb-8">
                <button onClick={sendFilters} className="bg-brand border border-brand rounded-lg flex items-center justify-center text-white text-xl px-3 py-3 w-40 font-semibold hover:bg-white hover:text-brand duration-300 transition-colors hover:border">
                    Show Flights
                </button>
            </div>
        </div>
    )
};