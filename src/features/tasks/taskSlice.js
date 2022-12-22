import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: "1",
    titulo: "Tarea 1",
    descripcion: "Esta es la tarea 1",
    completado: false,
  },
  {
    id: "2",
    titulo: "Tarea 2",
    descripcion: "Esta es la tarea 2",
    completado: false,
  },
];
export const rebanadaTareas = createSlice({
  name: "tareas",
  initialState: initialState,
  reducers: {
    //Funciones que nos sirven para actualizar el estado
    creaEstadoRebanadaTareas: (estado, accion) => {
      console.log(estado, accion);
      estado.push(accion.payload);
    },
    eliminaEstadoReabanadaTareas: (estado, accion) => {
      console.log("Desde la rebanada", accion.payload);
      const tareasEncontradas = estado.find(
        (tarea) => tarea.id === accion.payload
      );
      console.log("La tarea encontrada es ", tareasEncontradas);
      console.log("El estado es", estado);
      if (tareasEncontradas) {
        estado.splice(estado.indexOf(tareasEncontradas), 1);
      }
    },
    actualizaEstadoRebanadaTareas: (estado, accion) => {
      console.log("Estas en el reducer que actualiza",accion.payload);
      const {id,titulo, descripcion} = accion.payload
      const encontrado = estado.find(tarea=> tarea.id === id)
      if (encontrado){
        encontrado.descripcion=descripcion;
        encontrado.titulo=titulo;
      }
    },
  },
});
export const {
  creaEstadoRebanadaTareas,
  eliminaEstadoReabanadaTareas,
  actualizaEstadoRebanadaTareas,
} = rebanadaTareas.actions; //actions es una propiedad ya definida por la biblioteca
export default rebanadaTareas.reducer;
