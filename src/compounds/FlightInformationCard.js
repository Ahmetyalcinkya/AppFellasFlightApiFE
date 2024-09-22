import { faPlane, faPlaneArrival, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BRAND } from "../environment/environment";

export const FlightInformationCard = () => {

    return (
        <div className="flex flex-col justify-around items-center bg-white w-full rounded-2xl overflow-hidden">
            <h4 className="text-black font-bold text-lg w-full px-6 pt-6">
                Milano - Madrid
            </h4>
            <div className="flex flex-row justify-between items-center w-full px-6 py-3 gap-x-3 h-40">
                <div className="flex flex-col justify-center items-start">
                    <div className="flex flex-row items-center gap-x-2">
                        <FontAwesomeIcon icon={faPlaneDeparture} size="lg" color={BRAND} />
                        <span className="font-semibold">Departure</span>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-x-2 py-1 w-40">
                        <span className="text-xl font-bold">7.30 AM</span>
                        <span className="text-xl font-bold">Airport: MXP</span>
                    </div>
                </div>
                <hr className="w-full border-2 mx-10"/>
                <div className="w-full min-w-36 flex flex-col gap-y-2 justify-center items-center">
                    <span>Airline Name</span>
                    <FontAwesomeIcon icon={faPlane} size="2xl" color={BRAND} />
                    <span>2h 25m (NonStop)</span>
                </div>
                <hr className="w-full border-2 mx-10"/>

                <div className="flex flex-col justify-center items-start">
                    <div className="flex flex-row items-center gap-x-2">
                        <FontAwesomeIcon icon={faPlaneArrival} size="lg" color={BRAND} />
                        <span className="font-semibold">Arrival</span>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-x-2 py-1 w-40">
                        <span className="text-xl font-bold">9.55 AM</span>
                        <span className="text-xl font-bold">Airport: MAD</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between w-full h-20">
                <div className="flex flex-col items-start justify-center gap-y-1 px-6">
                    <span className="text-brand font-bold text-xl">Price: $200</span>
                    <span className="text-sm font-medium">Round Trip</span>
                </div>
                <button onClick={() => {}} className="flex flex-col items-start justify-center gap-y-1 bg-brand h-full px-6 rounded-tl-xl">
                    <span className="text-white font-bold text-2xl">Book Flight</span>
                </button>
            </div>
        </div>
    )
};