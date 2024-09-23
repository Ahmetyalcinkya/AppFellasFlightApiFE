import { faChevronDown, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import { useDispatch, useSelector } from "react-redux";
import { BRAND } from "../environment/environment";
import { fetchUsersFlights } from "../redux/features/thunk/fetchUsersFlights";

export const FlightCard = () => {
    const {usersFlights} = useSelector((state) => state.flight)
    const dispatch = useDispatch();
    console.log(usersFlights)

    const calculateArrivalTime = (departure, arrival) => {
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

    useEffect(() => {
        dispatch(fetchUsersFlights());
    }, [])

    return (
        <div className="w-full flex flex-col gap-y-8 items-center justify-center">
            {usersFlights.map((flight) => (
                <div key={flight.id} className="bg-white flex flex-1 justify-evenly items-center w-full rounded-xl p-10">
                <Accordion className="w-full">
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div key={flight.id} className="bg-white flex flex-1 justify-evenly items-center w-full rounded-xl p-10">
                                <span className="flex items-start justify-start w-1/12 h-20">
                                    <FontAwesomeIcon icon={faPlane} size="2xl" color={BRAND} />
                                </span>
                                <div className="flex flex-col flex-1 h-20 justify-between items-start w-6/12">
                                    <div className="flex text-3xl flex-col items-start justify-between w-full">
                                        {flight.scheduleTime.slice(0, 5)} - {flight.estimatedLandingTime.slice(11, 16)}
                                    </div>
                                    <div className="flex gap-x-16 justify-between w-full items-start">
                                        <div className="flex flex-col items-start py-2 gap-y-2 w-1/3">
                                            <span className="font-bold">{flight.airlineName}</span>
                                            <button className="flex w-full items-baseline gap-x-6">
                                                <span className="text-blue-700">Flight Details</span>
                                                    <FontAwesomeIcon icon={faChevronDown} color="blue" />
                                            </button>
                                        </div>
                                        <div className="flex flex-col items-start py-2 gap-y-2 flex-1">
                                            <span className="font-bold">Nonstop</span>
                                            <div className="flex w-full items-baseline justify-between">
                                                <span>{calculateArrivalTime(flight.scheduleTime.slice(0, 5), flight.actualLandingTime.slice(11, 16))}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start py-2 gap-y-2 flex-1">
                                            <span className="font-bold">{flight.route.departureIATACode} to {flight.route.arrivalIATACode}</span>
                                            <div className="flex w-full items-baseline justify-between">
                                                <span className="text-blue-700">{flight.flightName}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-x-4 w-5/12">
                                    <div className="w-2/12 h-28 border">
                                        <span className="flex flex-col w-full h-full items-center justify-center gap-y-2">
                                            <p className="font-extrabold text-2xl">$156</p>
                                            <p className="font-medium text-gray-500 text-center">Economy</p>
                                        </span>
                                    </div>
                                    <div className="w-2/12 h-28 border">
                                        <span className="flex flex-col w-full h-full items-center justify-center gap-y-2">
                                            <p className="font-extrabold text-2xl">$204</p>
                                            <p className="font-medium text-gray-500 text-center">Comfort+</p>
                                        </span>
                                    </div>
                                    <div className="w-2/12 h-28 border">
                                        <span className="flex flex-col w-full h-full items-center justify-center gap-y-2">
                                            <p className="font-extrabold text-2xl">$253</p>
                                            <p className="font-medium text-gray-500 text-center">Business</p>
                                        </span>
                                    </div>
                                    <div className="w-2/12 h-28 border">
                                        <span className="flex flex-col w-full h-full items-center justify-center gap-y-2">
                                            <p className="font-extrabold text-2xl">$386</p>
                                            <p className="font-medium text-gray-500 text-center">Delta One</p>
                                        </span>
                                    </div>
                                    <div className="w-2/12 h-28 border">
                                        <span className="flex flex-col w-full h-full items-center justify-center gap-y-2">
                                            <p className="font-extrabold text-2xl">$407</p>
                                            <p className="font-medium text-gray-500 text-center">First</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="w-1/2 flex flex-col justify-start items-start">
                            <span className="flex gap-x-3">
                                <p className="font-bold text-brand">Price :</p>
                                <p>${flight.price}</p>
                            </span> 
                            <span className="flex gap-x-3">
                                <p className="font-bold text-brand">Plane Capacity :</p>
                                <p>{flight.capacity}</p>
                            </span>
                            <span className="flex gap-x-3">
                                <p className="font-bold text-brand">Expected Time On Belt :</p>
                                <p>{flight.expectedTimeOnBelt.slice(11, 16)}</p>
                            </span> 
                            <span className="flex gap-x-3">
                                <p className="font-bold text-brand">Scheduled Date Time :</p>
                                <p>{flight.scheduledDateTime.slice(0,10)}</p>
                            </span> 
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
            </div>
                
            ))}
        </div>
    )
};