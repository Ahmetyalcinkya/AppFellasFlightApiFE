import { FlightInformationCard } from "./FlightInformationCard";
import { SearchFlightBox } from "./SearchFlightBox";


function FlightInformation() {
    // GET TODAY'S FLIGHT!
    return (
        <div className="w-2/3 flex flex-col justify-between items-center">
            <SearchFlightBox />
            <div className="flex flex-row items-center justify-between">
                <FlightInformationCard />
            </div>
        </div>
    )
};

export default FlightInformation;