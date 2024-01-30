import React, { useState, useEffect } from "react";
import randomId from "../utils/randomId";
import useModalConfirmation from "./useModalConfirmation";

const useTaks = () => {
    const [task, setTask] = useState({ title: '', id: '' });
    const [tasksList, setTasksList] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedId, setSelectedId] = useState('');

    const handleModalConfirmation = () => {
        setIsVisible(!isVisible);
    };


    const handleTextChange = (e) => {
        setTask({ title: e, id: randomId() })
        console.log(task)
    }

    const handleAddTask = () => {
        setTasksList([...tasksList, task]);
        setTask('');
        console.log(tasksList)
    };

    const openModal = (id) => {
        console.log('id en openModal: ', id)
        handleModalConfirmation();
        setSelectedId(id);

    };

    const handleDeleteTask = (id) => {
        setTasksList(tasksList.filter(task => task.id !== selectedId));
        handleModalConfirmation();
    };


    return {
        openModal,
        isVisible,
        task,
        setTask,
        tasksList,
        setTasksList,
        selectedId,
        handleTextChange,
        handleAddTask,
        handleDeleteTask,
        handleModalConfirmation,
    }
}

export default useTaks;