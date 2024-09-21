import FlightInformation from "../compounds/FlightInformation";
import { SideBar } from "../compounds/SideBar";

function HomePage() {
    return (
        <div className="flex flex-row justify-around items-center w-full h-full pt-6">
            <FlightInformation />
            <SideBar />
        </div>
    )
};

export default HomePage;