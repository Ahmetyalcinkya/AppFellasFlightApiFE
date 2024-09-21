import CarRental from "../assets/car-rental.jpeg";
import Hotel from "../assets/hotel.jpg"
import Travel from "../assets/travel.jpg"
import { Card } from "./Card";

export const SideBar = () => {

    const cardInfo = [
        {
            image: CarRental,
            icon: "car",
            text: "CAR RENTALS"
        },
        {
            image: Hotel,
            icon: "hotel",
            text: "HOTELS"
        },
        {
            image: Travel,
            icon: "travel",
            text: "TRAVEL PACKAGES"
        }
    ];

    return (
        <div className="flex flex-col gap-y-10 items-center justify-center w-1/3 px-24">
            {cardInfo.map((card) => (<Card image={card.image} icon={card.icon} text={card.text} />))}
        </div>
    )
};