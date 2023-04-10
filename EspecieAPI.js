class EspecieAPI {

  async obtenerEspecies() {
    //Usando fetch
    const respuesta = await fetch("http://localhost:3000/listar_especies");
    const especies = await respuesta.json();
    return especies;
  }

  async mostrarEspecies() {
    //Obtener la tabla
    const tabla = document.getElementById("tabla_especies");
    const data= await this.obtenerEspecies();
    data.forEach(especie => {
      const row = tabla.insertRow();
      row.insertCell().innerText = especie.id;
      row.insertCell().innerText = especie.nombre;
      row.insertCell().innerText = especie.clasificacion;
      row.insertCell().innerText = especie.esperanzaVida;
      row.insertCell().innerText = especie.pesoPromedio;
    });
  }


  //Enviar los datos al servidor
  async enviarDatos() {
    //Usando fetch

    //Obtener los datos del formulario
    const datos = {
      nombre: document.getElementById("nombre").value,
      clasificacion: document.getElementById("clasificacion").value,
      esperanzaVida: parseInt(document.getElementById("esperanza_vida").value),
      pesoPromedio: parseFloat(document.getElementById("peso_promedio").value),
    };

    await fetch("http://localhost:3000/crear_especie", {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //Mostrar mensaje de exito en la div de mensajes
    const divMensajes = document.getElementById("mensajes");
    const divAlert = document.createElement("div");

    divAlert.addEventListener("transitionend", function () {
        divAlert.remove();
      });


    divAlert.setAttribute(
      "class",
      "alert alert-success alert-dismissible fade"
    );
    divAlert.setAttribute("role", "alert");
    divAlert.innerHTML = "Especie creada exitosamente";
    divMensajes.appendChild(divAlert);
    divAlert.classList.add("show");
    setTimeout(function () {        
    divAlert.classList.remove("show");

    //Ir a la pagina de especies
    window.location.href = "listar_especies.html";

    }, 2000);
  }

  
}

export default EspecieAPI;
