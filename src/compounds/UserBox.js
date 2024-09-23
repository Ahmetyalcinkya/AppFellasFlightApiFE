import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const UserBox = () => {
    const { user } = useSelector((state) => state.user);
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if(user.token) {
            setLoggedIn(true)
        }
    }, [user])
    return (
        <div className="flex items-center justify-center gap-x-5">
            <div className="bg-brand h-8 rounded-full flex items-center justify-center px-4 cursor-pointer">
                {isLoggedIn ? (
                    <div className="flex items-center justify-center gap-x-2">
                        <FontAwesomeIcon icon={faUser} color="#fff" />
                        <h4 className="text-white">{`${user.firstName} ${user.lastName}`}</h4>
                    </div>
                ) : (
                    <Link to="/login" className="text-white font-medium">Login</Link>
                )}
            </div>
        </div>
    )
};
