import React, {useState, useEffect} from "react";
import randomId from "../utils/randomId";
import useModalConfirmation from "./useModalConfirmation";

const useTaks = () => {
    const [task, setTask] = useState({title: '', id: ''});
    const [tasksList, setTasksList] = useState([]);
    const { handleOpenModalConfirmation, handleModalConfirmation, selectedId, isVisible } = useModalConfirmation();

    console.log('selectedId: ', selectedId)
  
    const handleTextChange = (e) => {
      setTask({title: e, id: randomId()})
      console.log(task)
    }
  
    const handleAddTask = () => {
      setTasksList([...tasksList,task]);
      setTask('');
      console.log(tasksList)
    };
  
    const handleDeleteTask = (id) => {
      console.log('tasksList', tasksList)
      setTasksList(tasksList.filter(task => task.id  !==  selectedId))
      console.log('lista de tareas: ',tasksList)
      handleModalConfirmation()
      
    }


    return {
        isVisible,
        task, 
        setTask, 
        tasksList, 
        setTasksList, 
        selectedId,
        handleTextChange,
        handleAddTask, 
        handleDeleteTask, 
        handleOpenModalConfirmation, 
        handleModalConfirmation,
    }
}

export default useTaks;