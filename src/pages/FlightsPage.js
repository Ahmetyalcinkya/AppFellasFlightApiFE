import { FlightCard } from "../components/FlightCard";
import { FlightHeader } from "../components/FlightHeader";

function FlightsPage() {
    return (
        <div className="w-full">
            <FlightHeader />
            <FlightCard />
        </div>
    )
};

export default FlightsPage;