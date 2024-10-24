import Imagem from "../assets/download.webp"

function Herosection() {
    return (
        <section className=" container flex align-baseline h-screen">
        <div className="pl-24 pt-24 container">
            <h1 className=" text-gray-300 size-72 text-7xl font-oswald">Ola eu sou o <span className="text-yellow-500">RiqueMavosso</span></h1>
            <h2 className=" text-gray-500 size-72 text-5xl pb-40 ">Desenvolvedor de sites</h2>
            <button className=" text-white bg-gray-800 scale-125 border-spacing-36 border-white rounded-lg hover:bg-gray-700 border-2  hover:scale-150 transition-all">Contate-me</button>
        </div>
        <div>
        <img src={Imagem} className="pt-36 scale-150 w-12/12 h-6/6" />
        </div>
    </section>
    )
}

export default Herosection;