import { faChevronDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/features/thunk/logout";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const UserBox = () => {
    const { user } = useSelector((state) => state.user);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const dispatch = useDispatch();

    const signOut = () => {
        console.log("a")
        dispatch(logout());
    }

    useEffect(() => {
        if(user.token) {
            setLoggedIn(true)
        }
    }, [user])
    return (
        <div className="flex items-center justify-center gap-x-5">
            <div className="bg-brand h-8 rounded-full flex items-center justify-center px-4 cursor-pointer">
                {isLoggedIn ? (
                    <Menu>
                        <MenuButton className="inline-flex items-center gap-2 w-full text-sm/6 font-semibold text-white shadow-inner focus:outline-none">
                            <FontAwesomeIcon icon={faUser} color="#fff" />
                            <h4 className="text-white">{`${user.firstName} ${user.lastName}`}</h4>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </MenuButton>
                
                        <MenuItems
                        transition
                        anchor="bottom end"
                        className="w-52 origin-top-right rounded-xl border border-brand bg-brand p-1 mt-2 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none"
                        >
                        <MenuItem>
                            <Link to="/my-flights" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                My Flights
                            </Link>
                        </MenuItem>
                        <div className="my-1 h-px bg-white/5" />
                        <MenuItem>
                            <button onClick={signOut} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                Logout
                            </button>
                        </MenuItem>
                        </MenuItems>
                   </Menu>
                ) : (
                    <Link to="/login" className="text-white font-medium">Login</Link>
                )}
            </div>
        </div>
    )
};
