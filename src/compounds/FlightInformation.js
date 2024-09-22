import { AirlineRadioGroup } from "./AirlineRadioGroup";
import { ArrivalTimeRadioGroup } from "./ArrivalTimeRadioGroup";
import { FlightInformationCard } from "./FlightInformationCard";
import { SearchFlightBox } from "./SearchFlightBox";
import { SortByDropdown } from "./SortByDropdown";
import { StopsRadioGroup } from "./StopsRadioGroup";

function FlightInformation() {
    // GET TODAY'S FLIGHT!
    return (
        <div className="w-9/12 flex flex-col justify-between items-center">
            <SearchFlightBox />
            <div className="flex flex-row items-start justify-between w-full py-10">
                <div className="w-2/3 flex flex-col gap-y-8">
                    <FlightInformationCard />
                </div>
                {/* FILTER */}
                <div className="w-1/3 flex flex-col items-center justify-start pl-8">
                    <div className="flex flex-col items-start justify-start w-full">
                        <span className="text-black font-bold text-xl">Sort By:</span>
                        <SortByDropdown />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                        <span className="text-black font-bold text-xl">Arrival Time</span>
                        <ArrivalTimeRadioGroup />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                        <span className="text-black font-bold text-xl">Stops</span>
                        <StopsRadioGroup />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                        <span className="text-black font-bold text-xl">Airlines Included</span>
                        <AirlineRadioGroup />
                    </div>
                </div> 
            </div>
        </div>
    )
};

export default FlightInformation;