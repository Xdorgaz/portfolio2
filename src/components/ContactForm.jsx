import { useState } from "react";
import axios from "axios";
import { TheaterIcon } from "lucide-react";

function Contactform() {
  const [CepErro, setCepErro] = useState(false)
  const [cidade, setCidade] = useState("")
  const [rua, setRua] = useState("")
  function verificarcep(e) {
  if (e.target.value.length == 8) {
    axios.get(`https://brasilapi.com.br/api/cep/v1/${e.target.value}`)

    .then(function(response) {
      setCidade(response.data.city)
      setCidade(response.data.rua)
      alert(response.data.city)
      alert(response.data.rua)
      setCepErro(false)
    })
    .catch(function (response){
      setCepErro(true)
    })
  }
}


  return (
    <form className="p-6 bg-white rounded-lg shadow-md font-serif">
      <div className="mb-4">
        <label htmlFor="name">Nome Completo</label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone">Telefone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="cep">CEP</label>
        <input
          type="text"
          id="cep"
          name="cep"
          onChange={verificarcep}
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
        
        {CepErro &&
        <p1 className="text-red-500">Cep invalido</p1>}
      </div>
      <div className="mb-4">
        <label htmlFor="city">Cidade</label>
        <input
          type="text"
          id="cidade"
          name={cidade}
          onChange={(e) => setCidade(e.target.value)}
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="street">rua</label>
        <input
          type="text"
          id="rua"
          name={rua}
          onChange={(e) => setRua(e.target.value)}
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <button type="submit" className="w-full bg-secondary-500 font-semibold rounded-md p-2 hover:bg-secondary-700 text-black">
        Enviar
      </button>
    </form>
  );
}

export default Contactform;