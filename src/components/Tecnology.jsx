function Technology({img, name}) {
    return(
        <section className="container content-center flex pt-8 w-1/4"> 
        <div className="bg-gray-900 hover:bg-gray-300 transition-all rounded-2xl hover:scale-110 border-2 border-gray-200 p-4">
            <img src={img} className="scale-100 h-64 "/>
            <h1 className="text-white text-2xl font-oswald">{name}</h1>
           </div>
        </section>
    )
}

export default Technology;