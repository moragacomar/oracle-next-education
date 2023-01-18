import { useState, useRef } from "react";
import "./App.css";
import { Aside, Footer, Logo } from "./components";

function App() {
  const [mensaje, setMensaje] = useState("");
  const input = useRef(null);
  const [modo, setModo] = useState();

  const eliminarAcentos = (texto) =>
    texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const codificarTexto = (mensaje) => {
    const texto = eliminarAcentos(mensaje);
    const textoCodificado = texto.split("").map((el) => {
      if (el === "a") return "ai";
      else if (el === "e") return "enter";
      else if (el === "i") return "imes";
      else if (el === "o") return "ober";
      else if (el === "u") return "ufat";
      else return el;
    });
    return textoCodificado.join("");
  };

  const decodificarTexto = (mensaje) => {
    const texto = eliminarAcentos(mensaje)
      .replace(/ai/g, "a")
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    return texto;
  };

  return (
    <div className="contenedor">
      <header className="header">
        <Logo />
        Challenge ONE Encriptador de Texto
      </header>
      <main className="contenido">
        <textarea
          className="textarea"
          name="texto"
          id="texto"
          placeholder="Ingrese el texto aqui"
          defaultValue={mensaje}
          ref={input}
          onChange={() =>
            !modo
              ? setMensaje(codificarTexto(input.current.value))
              : setMensaje(decodificarTexto(input.current.value))
          }
        />
        <p className="advertencia">Solo letras minúsculas y sin acentos</p>
      </main>
      <Aside mensaje={mensaje} />
      <div id="snackbar">Texto copiado..</div>
      <div className="div-switch">
        Encriptar
        <label className="switch">
          <input
            type="checkbox"
            name="modo"
            id="modo"
            onChange={(e) => {
              if (!e.target.checked) {
                setMensaje(codificarTexto(input.current.value));
                setModo(false);
              } else {
                setMensaje(decodificarTexto(input.current.value));
                setModo(true);
              }
            }}
          />
          <span className="slider round"></span>
        </label>
        Desencriptar
      </div>
      <Footer />
    </div>
  );
}

export default App;
