import React, {useState} from "react";
import randomId from "../utils/randomId";

const useTaks = () => {
    const [task, setTask] = useState({title: '', id: ''});
    const [tasksList, setTasksList] = useState([]);
  
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
      setTasksList(tasksList.filter(task => task.id  !==  id))
      console.log('delete')
    }

    return {
        task, setTask, tasksList, setTasksList, handleTextChange, handleAddTask, handleDeleteTask
    }
}

export default useTaks;