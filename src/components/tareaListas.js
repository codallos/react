import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"; // useDispatch sirve para llamar a las funciones; mientras useSelector para traer los datos que estan dentro del estado;
import { eliminaEstadoReabanadaTareas } from "../features/tasks/taskSlice.js";
function TareaListas() {
  const tareas = useSelector((estado) => estado.tareas); // de todo el estado, quiero el estado de la rebanada llamdo tareas
  console.log(tareas);
  const miDespachador = useDispatch();
  const eliminaTarea = (id) => {
    console.log("Desde tarea <Lista></Lista>s", id);
    miDespachador(eliminaEstadoReabanadaTareas(id));
  };
  return (
    <div>
      <header>
        <h1> Tareas {tareas.length}</h1>
        <Link to={'/crear-tarea'}>
          Crear tarea
        </Link>
      </header>
      {tareas.map((tarea) => (
        <div key={tarea.id}>
          <h3>{tarea.titulo}</h3>
          <p>{tarea.descripcion}</p>
          {/* Debe de ser una funcion de lo contrario capturara todos los ids */}
          <button onClick={() => eliminaTarea(tarea.id)}>Eliminar</button>
          <Link to={`/editar-tarea/${tarea.id}`}>
            Actulizar tarea
          </Link>
        </div>
      ))}
    </div>
  );
}

export default TareaListas;
