import Technology from "./Tecnology"
import Luaimg from "../assets/lua-original.svg"
import Javaimg from "../assets/5968282.png"

function Aboutsection() {
    return( 
    <section id="Sobre">
    <div className="text-white container pl-24">
            <h1 className="font-gordo text-7xl">Sobre mim</h1>

            <p className="text-4xl pt-10">Sou programador a 2 minutos, aprendi em um video do youtube, <br/> crio sites (este é meu primeiro site) pretendo ser contratado pra <br/> trabalhar em uma empresa de imóveis venezuelanos</p>
        </div>
        <div className="pl-24">
            <h1 className="text-white text-5xl font-gordo pt-8">Tecnologias</h1>
            <div className="flex content-start">
                <Technology img={Luaimg} name="Lua C Script"/>
                <Technology img={Javaimg} name="Java"/>

            </div>
        
        </div>
        </section>
    )
}

export default Aboutsection