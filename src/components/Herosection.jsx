import Imagem from "../assets/download.webp"
function Herosection() {
    return (
        <section className=" container flex align-baseline h-screen">
        <div className="p-24 container">
            <h1 className=" text-gray-300 size-72 text-7xl ">Ola eu sou o <span className="text-yellow-500">RiqueMavosso</span></h1>
            <h2 className=" text-gray-500 size-72 text-5xl ">Desenvolvedor de sites</h2>
            <button className="bg-gray-300 scale-125 border-spacing-36 rounded-lg hover:bg-gray-700 border-4 hover:border-gray-700 hover:border-8  transition-all">Contate-me</button>
        </div>
        <div>
        <img src={Imagem} className="pt-24 scale-150 w-12/12 h-6/6" />
        </div>
    </section>
    )
}

export default Herosection;