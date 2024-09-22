import { useState } from "react";
import { AirlineRadioGroup } from "./AirlineRadioGroup";
import { ArrivalTimeRadioGroup } from "./ArrivalTimeRadioGroup";
import { FlightInformationCard } from "./FlightInformationCard";
import { SearchFlightBox } from "./SearchFlightBox";
import { SortByDropdown } from "./SortByDropdown";
import { StopsRadioGroup } from "./StopsRadioGroup";

function FlightInformation() {
    const [airline, setAirline] = useState(null);
    const [sort, setSort] = useState(null);
    const [time, setTime] = useState({
        startTime: null,
        endTime: null
    });

    const handleSort = (data) => {
        setSort(data);
    }

    const handleTime = (data) => {
        setTime({
            startTime: data.startTime,
            endTime: data.endTime
        });
    }

    const handleAirline = (data) => {
        setAirline(data);
    }

    const sendFilters = () => {
        const data = {
            startTime: time.startTime,
            endTime: time.endTime,
            airline: airline,
            property: "PRICE",
            direction: sort
        }
        // Dispatch filterFlights(data)
    }

    return (
        <div className="w-9/12 flex flex-col justify-between items-center">
            <SearchFlightBox />
            <div className="flex flex-row items-start justify-between w-full py-10">
                <div className="w-2/3 flex flex-col gap-y-8">
                    <FlightInformationCard />
                </div>
                <div className="w-1/3 flex flex-col items-start justify-start pl-8">
                    <div className="flex flex-col items-start justify-start w-full">
                        <span className="text-black font-bold text-xl">Sort By:</span>
                        <SortByDropdown handleSort={handleSort} />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                        <span className="text-black font-bold text-xl">Arrival Time</span>
                        <ArrivalTimeRadioGroup handleTime={handleTime} />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                        <span className="text-black font-bold text-xl">Stops</span>
                        <StopsRadioGroup />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                        <span className="text-black font-bold text-xl">Airlines Included</span>
                        <AirlineRadioGroup handleAirline={handleAirline} />
                    </div>
                    <div className="flex justify-center items-center my-4">
                        <button onClick={() => {}} className="bg-brand text-white font-bold text-lg px-4 py-2 rounded-lg">Filter</button>
                    </div>
                </div> 
            </div>
        </div>
    )
};

export default FlightInformation;