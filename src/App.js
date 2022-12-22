import { BrowserRouter, Routes, Route } from "react-router-dom";
import TareaListas from "./components/tareaListas.js";
import TareaFormularios from "./components/tareaFormularios.js";
function App() {
  //  const estadoTareas = useSelector(state => state.tareas) //de todo el estado quiero acceder a el estado llamado tareas. (el estado es miStore completo ), el cual tiene una parte llamada "tareas" que hace referencia a un estado inicial o slice (rebanadaTareas); el slice ademas de proveer el estado inicial se encargara de contener las funciones correspondientes para hacer los cambios en el estado
  //  console.log(estadoTareas);
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TareaListas />} />
            <Route path="/crear-tarea" element={<TareaFormularios />} />
            <Route path="/editar-tarea/:id" element={<TareaFormularios/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
