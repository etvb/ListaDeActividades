let listaPendientes = document.getElementById('lista-tweets');



eventListeners();

function eventListeners(){
//1.- cuando el formulario es enviado se ejecuta la funcion agregarActividad
  document.querySelector('#formulario').addEventListener('submit', agregarActividad);

}



//añade una actividad 
function agregarActividad(e){
  //2.- quito el la ccion por default del formulario que es recargar la info
  //e.preventDefault();
  //3.-actividad almacena lo que se introduce en el textarea 
  let actividad = document.getElementById('tweet').value;
  console.log(actividad);


  //4.- Crear el elemento html que mostrara la info de la variable actividad
  const li = document.createElement('li');
  li.innerHTML = actividad;
  //5.- lo muestra en 
  listaPendientes.appendChild(li);
  //6.- ya que la ctividad es la como lista borramos el contenido del textarea
  document.getElementById('tweet').value = '';

  
  
  
}
