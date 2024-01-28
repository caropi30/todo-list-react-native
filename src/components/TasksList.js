import React from "react";
import { FlatList } from "react-native";
import Task from "./Task";
import ModalConfirmation from "./ModalConfirmation";
import useTaks from "../hooks/useTask";

const TasksList = ({data}) => {
    const { handleDeleteTask, isVisible, handleOpenModalConfirmation, handleModalConfirmation } = useTaks();

    return (
       <>
            <FlatList data={data} keyExtractor={task => task.id} renderItem={({item}) => <Task task={item.title} key={item.id} deleteTask={() => handleOpenModalConfirmation(item.id)} />}/>
            <ModalConfirmation isVisible={isVisible} onPressYes={handleDeleteTask} onPressNo={handleModalConfirmation}/>
       </>
    )
}
    
export default TasksList;