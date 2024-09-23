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
        <div className="flex flex-col gap-y-8 items-end justify-center w-96">
            {cardInfo.map((card, index) => (<Card key={index} image={card.image} icon={card.icon} text={card.text} />))}
        </div>
    )
};