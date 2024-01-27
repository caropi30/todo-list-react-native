import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import  SearchBar from "./src/components/SearchBar";
import Task from "./src/components/Task";
import TasksList from "./src/components/TasksList";
import useTaks from "./src/hooks/useTask";


export default function App() {
 const {task, setTask, tasksList, setTasksList, handleTextChange, handleAddTask, handleDeleteTask} = useTaks();

  return (
    <SafeAreaView style={styles.container}>
       <StatusBar
          backgroundColor='#ff0054'
      />
      <SearchBar addTask={handleAddTask} onChangeText={handleTextChange} searchValue={task}/>
      <TasksList data={tasksList} task={task} deleteTask={handleDeleteTask}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
