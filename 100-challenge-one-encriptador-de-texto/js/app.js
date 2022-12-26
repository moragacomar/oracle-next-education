const eliminarAcentos = (texto) =>
    texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const encriptar = () => {
    const texto = eliminarAcentos(
        document.getElementById("texto").value.toLowerCase()
    );
    const msjEncriptado = document.querySelector(".sidebar");
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
    msjEncriptado.innerHTML = `<p class="mensajeIngreseTexto">${textoCodificado.join("")} </p><input class="btnCopiar" type="submit" value="Copiar" />`;
    document.querySelector(".btnCopiar").addEventListener("click", copiar, false);
};

const copiar = () => {
    /* Copiar al portapapeles*/
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = document.querySelector(".mensajeIngreseTexto").innerText;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    /* Toast Notificación */
    const toast = document.getElementById("snackbar");
    toast.className = "show";
    setTimeout(function () {
        toast.className = toast.className.replace("show", "");
    }, 2900);
};

const desencriptar = () => {
    const textoCodificado = eliminarAcentos(
        document.getElementById("texto").value.toLowerCase()
    );
    const textoNormal = textoCodificado
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    const msjEncriptado = document.querySelector(".sidebar");
    msjEncriptado.style.textAlign = "left";
    msjEncriptado.style.justifyContent = "space-between";
    msjEncriptado.innerHTML = `<p class="mensajeIngreseTexto">${textoNormal}</p><input class="btnCopiar" type="submit" value="Copiar" />`;
    document.querySelector(".btnCopiar").addEventListener("click", copiar, false);
};

document
    .querySelector(".btnEncriptar")
    .addEventListener("click", encriptar, false);
document
    .querySelector(".btnDesencriptar")
    .addEventListener("click", desencriptar, false);
