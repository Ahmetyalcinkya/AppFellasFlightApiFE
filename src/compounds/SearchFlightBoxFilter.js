import { faCalendarPlus, faPlaneArrival, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BRAND } from "../environment/environment";

export const SearchFlightBoxFilter = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // SEND DATE AIRLINE INFORMATION TO THE BACKEND ! 
    
    return (
        <div>
            <div className="flex flex-row items-center justify-around py-6 px-4 gap-x-4">
                <div className="flex gap-x-2 h-10">
                    <div className="border-brand rounded-l-full border-2 otuline-none overflow-hidden flex flex-row items-center px-4 py-1">
                        <FontAwesomeIcon icon={faPlaneDeparture} size="lg" color={BRAND} />
                        {/* AIRLINE LIST DROPDOWN */}
                        <DatePicker
                            className="p-2 w-full h-10 text-base outline-none focus:outline-none"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
                    </div>
                    <div className="border-brand rounded-r-full border-2 otuline-none overflow-hidden flex flex-row items-center px-4 py-1">
                        <FontAwesomeIcon icon={faPlaneArrival} size="lg" color={BRAND} />
                        {/* AIRLINE LIST DROPDOWN */}
                        <DatePicker
                            className="p-2 w-full h-10 text-base outline-none focus:outline-none"
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                        />
                    </div>
                </div>
                <div className="flex gap-x-2 h-10">
                    <div className="border-brand rounded-l-full border-2 otuline-none overflow-hidden flex flex-row items-center px-4 py-1">
                        <FontAwesomeIcon icon={faCalendarPlus} size="lg" color={BRAND} />
                        <DatePicker
                            className="p-2 w-full h-10 text-base outline-none focus:outline-none"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
                    </div>
                    <div className="border-brand rounded-r-full border-2 otuline-none overflow-hidden flex flex-row items-center px-4 py-1">
                        <FontAwesomeIcon icon={faCalendarPlus} size="lg" color={BRAND} />
                        <DatePicker
                            className="p-2 w-full h-10 text-base outline-none focus:outline-none"
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                        />
                    </div>
                </div>
                
            </div>
            <div className="px-4 pb-8">
                <button onClick={() => {}} className="bg-brand border border-brand rounded-lg flex items-center justify-center text-white text-xl px-3 py-3 w-40 font-semibold hover:bg-white hover:text-brand duration-300 transition-colors hover:border">
                    Show Flights
                </button>
            </div>
        </div>
    )
};