import { HeaderBox } from "../compounds/HeaderBox";
import { Logo } from "../compounds/Logo";
import { UserBox } from "../compounds/UserBox";

function Header() {
    return (
        <header className="w-full h-20 py-5 rounded-t-2xl flex justify-between">
            <Logo />
            <div className="h-full flex flex-row items-center justify-center gap-x-3">
                <HeaderBox />
                <UserBox />
            </div>
        </header>
    )
};

export default Header;