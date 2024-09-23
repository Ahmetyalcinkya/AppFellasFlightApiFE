import { faChevronDown, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BRAND } from "../environment/environment";

export const FlightHeader = () => {

    const buttons = [
        {
            id: 1,
            name: "Times",
        },
        {
            id: 2,
            name: "Stops",
        },
        {
            id: 3,
            name: "Airlines",
        },
        {
            id: 4,
            name: "Airports",
        },
        {
            id: 5,
            name: "Amentities",
        }
    ]

    return (
        <div className="w-full bg-white my-10 py-2 flex items-center justify-around rounded-lg">
            <div className="flex gap-x-6">
                {buttons.map((button) => (
                    <button key={button.id} className="border px-2 py-1 border-gray-200 rounded-md">{button.name}</button>
                ))}
                 <button className="px-2 py-1 rounded-md flex items-center justify-center gap-x-2">
                    <p className="text-blue-700 underline">Edit Search</p>
                    <FontAwesomeIcon icon={faChevronDown} color="blue" />
                 </button>
            </div>
            <div className="flex">
                <div className="flex flex-col border-r-2 px-4">
                    <div>
                        <FontAwesomeIcon icon={faStar} color={BRAND} />
                        <FontAwesomeIcon icon={faStar} color={BRAND} />
                        <FontAwesomeIcon icon={faStar} color="gray" />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faStar} color="gray" />
                        <FontAwesomeIcon icon={faStar} color="gray" />
                        <FontAwesomeIcon icon={faStar} color="gray" />
                    </div>
                </div>
                <div className="flex flex-col border-r-2 px-4">
                    <div>
                        <FontAwesomeIcon icon={faStar} color={BRAND} />
                        <FontAwesomeIcon icon={faStar} color={BRAND} />
                        <FontAwesomeIcon icon={faStar} color={BRAND} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faStar} color="gray" />
                        <FontAwesomeIcon icon={faStar} color="gray" />
                        <FontAwesomeIcon icon={faStar} color="gray" />
                    </div>
                </div>
                <div className="flex flex-col border-r-2 px-4">
                    <div>
                        <FontAwesomeIcon icon={faStar} color={BRAND} />
                        <FontAwesomeIcon icon={faStar} color={BRAND} />
                        <FontAwesomeIcon icon={faStar} color={BRAND} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faStar} color={BRAND} />
                        <FontAwesomeIcon icon={faStar} color="gray" />
                        <FontAwesomeIcon icon={faStar} color="gray" />
                    </div>
                </div>
                <div className="flex flex-col border-r-2 px-4">
                    <div>
                        <FontAwesomeIcon icon={faStar} color={BRAND} />
                        <FontAwesomeIcon icon={faStar} color={BRAND} />
                        <FontAwesomeIcon icon={faStar} color={BRAND} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faStar} color={BRAND} />
                        <FontAwesomeIcon icon={faStar} color={BRAND} />
                        <FontAwesomeIcon icon={faStar} color="gray" />
                    </div>
                </div>
                <div className="flex flex-col px-4">
                    <div>
                        <FontAwesomeIcon icon={faStar} color={BRAND} />
                        <FontAwesomeIcon icon={faStar} color={BRAND} />
                        <FontAwesomeIcon icon={faStar} color={BRAND} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faStar} color={BRAND} />
                        <FontAwesomeIcon icon={faStar} color={BRAND} />
                        <FontAwesomeIcon icon={faStar} color={BRAND} />
                    </div>
                </div>
            </div>
        </div>
    )
};