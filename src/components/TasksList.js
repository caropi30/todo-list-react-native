import React from "react";
import { FlatList } from "react-native";
import Task from "./Task";

const TasksList = ({data, task, deleteTask}) => <FlatList data={data} keyExtractor={task => task.id} renderItem={({item}) => <Task task={item.title} deleteTask={deleteTask} />}/>
    
export default TasksList;