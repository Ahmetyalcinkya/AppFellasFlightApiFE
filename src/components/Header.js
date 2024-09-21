import { Logo } from "../compounds/Logo";

function Header() {
    return (
        <header className="w-full h-20 px-20 bg-headerBackground rounded-t-2xl flex justify-between">
            <Logo />
        </header>
    )
};

export default Header;