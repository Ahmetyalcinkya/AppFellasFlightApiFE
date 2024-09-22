import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const UserBox = () => {
    const isLoggedIn = true;

    return (
        <div className="flex items-center justify-center gap-x-5">
            <div className="bg-brand h-8 rounded-full flex items-center justify-center px-4 cursor-pointer">
                {isLoggedIn ? (
                    <div className="flex items-center justify-center gap-x-2">
                        <FontAwesomeIcon icon={faUser} color="#fff" />
                        <h4 className="text-white">Ahmet Yalçınkaya</h4>
                        {/* GİRİŞ YAPAN KULLANICININ ADI SOYADI */}
                    </div>
                ) : (
                    <Link to="/login" className="text-white font-medium">Login</Link>
                )}
            </div>
        </div>
    )
};
