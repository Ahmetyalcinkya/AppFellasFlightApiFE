import { Logo } from "../compounds/Logo";

function Footer() {
    return (
        <div className="w-full h-20 flex items-center justify-around bg-headerBackground">
            <p className="flex-1 text-center">Copyright by Ahmet Can Yalçınkaya</p>
            <span className="flex-1">
                <Logo />
            </span>
            <p className="flex-1 text-center">2024</p>
        </div>
    )
};

export default Footer;