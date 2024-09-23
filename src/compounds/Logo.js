import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Logo = () => {
    return (
        <Link to="/" className="flex flex-row items-center justify-center gap-x-2">
            <div className="w-8 h-8 bg-brand p-2 relative rounded-full items-center flex">
                <div className="absolute -left-0.5">
                    <FontAwesomeIcon icon={faPlane} size="xl" color="white" />
                </div>
            </div>
            <h1 className="text-xl font-semibold">PLANE SCAPE</h1>
        </Link>
    )
};