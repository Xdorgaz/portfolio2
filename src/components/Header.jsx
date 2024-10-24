import { BrickWall as Logo } from "lucide-react";

function Header(){
    return(
        <header className="bg-gray-500 fixed w-screen shadow-gray-600 shadow-xl"> 
        <div className="container flex justify-between p-2 hover:pb-5 transition-all">
            <Logo className="fill-red-500 scale-125 hover:opacity-50 hover:text-gray-500 hover:scale-150 transition-all"/>
        <nav className="  pr-96 font-mono"> 
            <a href="#Sobre" className="pr-6 hover:text-white">Sobre</a>
            <a href="#portfolio" className=" pr-6 hover:text-white">Portfolio</a>
            <a href="#contato" className="pr-6 hover:text-white">Contato</a>
        </nav>
        
        </div>
        </header>
    );
};

export default Header;