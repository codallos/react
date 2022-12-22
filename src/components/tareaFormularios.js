import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom"; // sirve para poder cambiar de pagina.
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  creaEstadoRebanadaTareas,
  actualizaEstadoRebanadaTareas,
} from "../features/tasks/taskSlice.js";

function TareaFormularios() {
  const [tareas, estableceTarea] = useState({
    titulo: "", // Texto titulo debe de ser igual que la propiedad name ya que se va a capturar con javascript este evento
    descripcion: "",
  });

  const despachador = useDispatch();
  const miNavegacion = useNavigate();
  const misParametros = useParams();
  const miSelector = useSelector((estado) => estado.tareas);

  useEffect(() => {
    // console.log("Funciona", misParametros);

    if (misParametros.id) { // Si ahy parametros en la URL obtenemos el ID y guardamos la tarea correspondiente en el estado actual del useState
      // console.log("Existe");
      // const tareaEncontrada = miSelector.find(
        // (tarea) => tarea.id === misParametros.id
      // );
      // estableceTarea(tareaEncontrada);
      estableceTarea( miSelector.find(tarea => tarea.id === misParametros.id))
    } 
    
  }, [misParametros.id, miSelector]);

  const manejadorDeCambio = (evento) => {
    estableceTarea({
      ...tareas,
      [evento.target.name]: evento.target.value,
    });
  };

  const manejadorDeFormulario = (evento) => {
    evento.preventDefault();
    if (misParametros.id) {
      despachador(actualizaEstadoRebanadaTareas(tareas));
      console.log("Estas en el if", misParametros.id);
    } else {
      despachador(
        creaEstadoRebanadaTareas({
          ...tareas,
          id: uuid(tareas),
        })
      ); // solo podemos pasar un parametro el action, el cual tendra un payload que es el parametro que pasamos,
    }
    miNavegacion("/"); //Terminado el proceso de agregar tarea, te redirecciona a la pagina principal
  };
  return (
    <form onSubmit={manejadorDeFormulario}>
      <input
        name="titulo"
        type="text"
        placeholder="Titulo"
        onChange={manejadorDeCambio}
        value={tareas.titulo}
      />
      <textarea
        name="descripcion"
        placeholder="descripcion"
        onChange={manejadorDeCambio}
        value={tareas.descripcion}
      ></textarea>
      <button type="submit">Guardar</button>
    </form>
  );
}

export default TareaFormularios;
