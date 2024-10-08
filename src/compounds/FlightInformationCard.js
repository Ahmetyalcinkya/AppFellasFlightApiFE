import { faPlane, faPlaneArrival, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BRAND } from "../environment/environment";
import { fetchAllFlights } from "../redux/features/thunk/fetchFlights";
import { AxiosWithAuth } from "../utils/AxiosWithAuth";

export const FlightInformationCard = () => {

    const dispatch = useDispatch();
    const {flights} = useSelector((state) => state.flight)
    const {user} = useSelector((state) => state.user);

    const calculateArrivalTime = (departure, arrival) => {
        if(departure && arrival) {
            const [departureHour, departureMinutes] = departure.split(":").map(Number);
            const [arrivalHour, arrivalMinutes] = arrival.split(":").map(Number);
            const totalDepatureMinutes = departureHour * 60 + departureMinutes;
            const totalArrivalMinutes = arrivalHour * 60 + arrivalMinutes;
            const differenceInMinutes = totalArrivalMinutes - totalDepatureMinutes;
            const positiveDifferenceInMinutes = Math.abs(differenceInMinutes);
            const diffHours = Math.floor(positiveDifferenceInMinutes / 60);
            const diffMinutes = positiveDifferenceInMinutes % 60;
            return `${diffHours}h ${diffMinutes}m`
        }
    }

    const ids = [];
    const addFlightToUser = (id) => {
        AxiosWithAuth()
            .put("user/update-flights", id, {
                headers: {
                    'Content-Type': 'application/json'
                }})
            .then((response) => {
                console.log(`Flight with the given id: ${id} added to user!`);
                window.location.reload();
            })
            .catch((error) => console.log(error))
    }
    
    useEffect(() => {
        flights.length === 0 && dispatch(fetchAllFlights());
    }, [])

    return (
        <>
           {flights.map((flight, index) => (
                <div key={index}>
                    <div className="flex flex-col justify-around items-center bg-white w-full rounded-2xl rounded-bl-none overflow-hidden">
                        <h4 className="text-black font-bold text-lg w-full px-6 pt-6">
                            {flight.flightName}
                        </h4>
                        <div className="flex flex-row justify-between items-center w-full px-6 py-3 gap-x-3 h-40">
                            <div className="flex flex-col justify-center items-start">
                                <div className="flex flex-row items-center gap-x-2">
                                    <FontAwesomeIcon icon={faPlaneDeparture} size="lg" color={BRAND} />
                                    <span className="font-semibold">Departure</span>
                                </div>
                                <div className="flex flex-col justify-center items-start gap-x-2 py-1 w-40">
                                    <span className="text-xl font-bold">{flight.scheduleTime?.slice(0, 5)}</span>
                                    <span className="text-xl font-bold">Airport: {flight.route.departureIATACode}</span>
                                </div>
                            </div>
                            <hr className="w-full border-2 mx-10"/>
                            <div className="w-full min-w-36 flex flex-col gap-y-2 justify-center items-center">
                                <span>{flight.airlineName}</span>
                                <FontAwesomeIcon icon={faPlane} size="2xl" color={BRAND} />
                                <span>{calculateArrivalTime(flight.scheduleTime?.slice(0, 5), flight.actualLandingTime?.slice(11, 16))} (NonStop)</span>
                            </div>
                            <hr className="w-full border-2 mx-10"/>

                            <div className="flex flex-col justify-center items-start">
                                <div className="flex flex-row items-center gap-x-2">
                                    <FontAwesomeIcon icon={faPlaneArrival} size="lg" color={BRAND} />
                                    <span className="font-semibold">Arrival</span>
                                </div>
                                <div className="flex flex-col justify-center items-start gap-x-2 py-1 w-40">
                                    <span className="text-xl font-bold">{flight.estimatedLandingTime?.slice(11, 16)}</span>
                                    <span className="text-xl font-bold">Airport: {flight.route.arrivalIATACode}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-full h-20">
                            <div className="flex flex-col items-start justify-center gap-y-1 px-6">
                                <span className="text-brand font-bold text-xl">Price: ${flight.price}</span>
                                <span className="text-sm font-medium">Round Trip</span>
                            </div>
                            <button disabled={flight.passengerIds.includes(user.id)} onClick={() => {
                                ids.push(flight.id);
                                addFlightToUser(ids);
                            }} className={`flex flex-col items-start justify-center gap-y-1 ${flight.passengerIds.includes(user.id) ? "bg-gray-500" : "bg-brand"}  h-full px-6 rounded-tl-xl`}>
                                <span className="text-white font-bold text-2xl">Book Flight</span>
                            </button>
                        </div>
                    </div>
                    <button className="flex items-center justify-center bg-brand/10 rounded-b-lg">
                        <span className="underline text-brand py-3 px-4">Check Details</span>
                    </button>
                </div>
            ))}
        </>
    )
};