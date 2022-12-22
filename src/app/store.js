import {configureStore} from '@reduxjs/toolkit';
import rebanadaTareas from '../features/tasks/taskSlice.js'

//Es como hacer uso de un Usestate por aparte de la aplicacion
export const miStore = configureStore({
  reducer:{
    tareas: rebanadaTareas
  }  

})

export default miStore;

