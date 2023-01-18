const Aside = (props) => {
  const copiar = async () => {
    console.log(props.mensaje);
    /* Copiar al portapapeles*/
    await navigator.clipboard.writeText(props.mensaje);

    /* Toast Notificación */
    const toast = document.getElementById("snackbar");
    toast.className = "show";
    setTimeout(
      () => (toast.className = toast.className.replace("show", "")),
      2900
    );
  };
  if (props.mensaje.length == 0) {
    return (
      <aside className="sidebar">
        <img src="img/muñeco.png" alt="Muñeco" className="sidebar__imagen" />
        <h3 className="tituloIngreseTexto">Ningún mensaje fue encontrado</h3>
        <p className="mensajeIngreseTexto">
          Ingresa el texto que desees encriptar o desencriptar.
        </p>
      </aside>
    );
  } else {
    return (
      <aside
        className="sidebar"
        style={{ textAlign: "left", justifyContent: "space-between" }}
      >
        <p className="mensajeIngreseTexto">{props.mensaje}</p>
        <input
          className="btnCopiar"
          type="submit"
          value="Copiar"
          onClick={copiar}
        />
      </aside>
    );
  }
};
export default Aside;
