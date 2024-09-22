import { SearchFlightBoxFilter } from "./SearchFlightBoxFilter";
import { SearchFlightBoxHeader } from "./SearchFlightBoxHeader";

export const SearchFlightBox = () => {

    return (
        <div className="bg-white flex flex-col justify-between w-full rounded-2xl">
            <SearchFlightBoxHeader />
            <SearchFlightBoxFilter />
        </div>
    )
};