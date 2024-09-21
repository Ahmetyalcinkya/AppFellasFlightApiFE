import { faCar, faHotel, faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card = ({image, icon, text}) => {

    return (
        <div className="w-full h-full relative">
            <img src={image} className="rounded-3xl" />
            <div className="w-full h-10 absolute left-3 bottom-12 px-4">
                {icon === "car" && <FontAwesomeIcon icon={faCar} size="2xl" color="white" />}
                {icon === "hotel" && <FontAwesomeIcon icon={faHotel} size="2xl" color="white" />}
                {icon === "travel" && <FontAwesomeIcon icon={faUmbrellaBeach} size="2xl" color="white" />}
                <h1 className="text-2xl text-white font-bold py-2">{text}</h1>
            </div>
        </div>
    )
};