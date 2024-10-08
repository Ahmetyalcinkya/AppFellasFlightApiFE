import FlightInformation from "../compounds/FlightInformation";
import { SideBar } from "../compounds/SideBar";

function HomePage() {
    return (
        <div className="flex flex-row justify-between items-start w-full h-full pt-6">
            <FlightInformation />
            <SideBar />
        </div>
    )
};

export default HomePage;