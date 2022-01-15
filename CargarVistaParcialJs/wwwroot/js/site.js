// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


(() => {


    let cargarVistaParcial = document.querySelector("#btnCargarVistaParcial");

    let cargarFormulario = document.querySelector("#btnCargarFormulario");

    let contenedor = document.querySelector("#contenedor");

    cargarVistaParcial.addEventListener('click', () => {

        alert("Cargando...");

        cargarVista("./Home/VistaParcial", "GET");

    });

    cargarFormulario.addEventListener('click', () => {

        alert("Cargando...");

        cargarVista("./Home/CargarFormulario", "POST");

    });


    const cargarVista = (url,method) => {

        let xmlHttp = new XMLHttpRequest();
       
        xmlHttp.open(method, url);

        xmlHttp.onreadystatechange = (result) => {

            if (result.target.status === 200) {

                contenedor.innerHTML = result.srcElement.response;
                console.log(result.srcElement.response);
                result.preventDefault()
            }

            
        }

        xmlHttp.send();


    }


})()
