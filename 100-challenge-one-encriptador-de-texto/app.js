const codificarTexto = () => {
    const textoNormal = eliminarAcentos(
        document.getElementById("textoNormal").value.toLowerCase()
    );
    const textoCodificado = textoNormal.split("").map((el) => {
        if (el === "a") return "ai";
        else if (el === "e") return "enter";
        else if (el === "i") return "imes";
        else if (el === "o") return "ober";
        else if (el === "u") return "ufat";
        else return el;
    });
    document.getElementById("textoCodificado").value = textoCodificado.join("");
};

const decodificarTexto = () => {
    const textoCodificado = document.getElementById("textoCodificado").value;
    const textoNormal = textoCodificado.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById("textoNormal").value = textoNormal;
};

const eliminarAcentos = (texto) => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");