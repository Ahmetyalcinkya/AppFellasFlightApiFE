import { SearchFlightBoxFilter } from "./SearchFlightBoxFilter";
import { SearchFlightBoxHeader } from "./SearchFlightBoxHeader";

export const SearchFlightBox = () => {

    // Get all airlines from the backend;

    return (
        <div className="bg-white flex flex-col justify-between w-full rounded-2xl">
            <SearchFlightBoxHeader />
            <SearchFlightBoxFilter />
        </div>
    )
};