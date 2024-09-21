import { faEarthAmericas, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BRAND } from "../environment/environment";

export const HeaderBox = () => {
    return (
        <div className="flex items-center justify-center gap-x-10">
            <button className="flex flex-row items-center gap-x-2">
                <FontAwesomeIcon icon={faTag} size="lg" color={BRAND} />
                <h3 className="text-lg font-semibold text-black">
                    Deals
                </h3>
            </button>

            <button className="flex flex-row items-center gap-x-2">
                <FontAwesomeIcon icon={faEarthAmericas} size="lg" color={BRAND} />
                <h3 className="text-lg font-semibold text-black">
                    Deals
                </h3>
            </button>
        </div>
    )
};
