import React from "react";
import { FlatList } from "react-native";
import Task from "./Task";
import ModalConfirmation from "./ModalConfirmation";
import useTaks from "../hooks/useTask";

const TasksList = ({ data, onPressYes, onPressNo, deleteTask, isVisible }) => {

    return (
        <>
            <FlatList data={data} keyExtractor={task => task.id} renderItem={({ item }) => <Task task={item.title} id={item.id} deleteTask={() => deleteTask(item.id)} />} />
            <ModalConfirmation isVisible={isVisible} onPressYes={onPressYes} onPressNo={onPressNo} />
        </>
    )
}

export default TasksList;