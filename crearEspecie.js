//Importar la clase MensajeroAPI

import MensajeroAPI from './EspecieAPI.js';


//Crear una instancia de la clase MensajeroAPI
const mensajero = new MensajeroAPI();

//Obtener el boton del formulario
const boton = document.getElementById('btnProcesar');


boton.addEventListener('click', async (event) => {
    //Deshabilitar el boton
    boton.disabled = true;
    //Deshabilitar el envio del formulario
    event.preventDefault();
    await mensajero.enviarDatos();
}); 


