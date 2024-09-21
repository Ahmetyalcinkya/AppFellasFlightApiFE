import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchFlightBoxHeader = () => {

    return (
        <div className="w-full flex flex-row justify-between py-6">
            <div className="flex flex-row gap-x-3 items-center justify-start px-6 flex-1">
                <FontAwesomeIcon icon={faPlane} size="xl" color="black" />
                <h4 className="font-bold text-black text-xl">BOOK YOUR FLIGHT</h4>
            </div>
            <div className="rounded-full px-6">
                <button className="bg-brand text-white font-semibold py-2 px-4 rounded-l-full">
                    Round trip
                </button>
                <button className="bg-headerBackground text-brand font-semibold py-2 px-4 rounded-r-full">
                    One way
                </button>
            </div>
        </div>
    )
};