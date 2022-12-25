
const eliminarAcentos = (texto) => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");


const encriptar = () => {
    const texto = eliminarAcentos(document.getElementById("texto").value.toLowerCase());
    const msjEncriptado = document.querySelector(".sidebar")
    const textoCodificado = texto.split("").map((el) => {
        if (el === "a") return "ai";
        else if (el === "e") return "enter";
        else if (el === "i") return "imes";
        else if (el === "o") return "ober";
        else if (el === "u") return "ufat";
        else return el;
    });
    msjEncriptado.style.textAlign = "left";
    msjEncriptado.style.justifyContent = "space-between";
    msjEncriptado.innerHTML = `<p class="mensajeIngreseTexto">${textoCodificado.join("")}</p><input class="btnCopiar" type="submit" value="Copiar" />`;
}

const desencriptar = () => {
    const textoCodificado = eliminarAcentos(document.getElementById("texto").value.toLowerCase());
    const textoNormal = textoCodificado.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    const msjEncriptado = document.querySelector(".sidebar")
    msjEncriptado.style.textAlign = "left";
    msjEncriptado.style.justifyContent = "space-between";
    msjEncriptado.innerHTML = `<p class="mensajeIngreseTexto">${textoNormal}</p><input class="btnCopiar" type="submit" value="Copiar" />`;
}

document.querySelector(".btnEncriptar").addEventListener("click", encriptar, false);
document.querySelector(".btnDesencriptar").addEventListener("click", desencriptar, false);

