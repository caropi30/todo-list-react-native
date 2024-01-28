import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import  SearchBar from "./src/components/SearchBar";
import TasksList from "./src/components/TasksList";
import useTaks from "./src/hooks/useTask";


export default function App() {
 const {task, tasksList, handleTextChange, handleAddTask} = useTaks();

  return (
    <SafeAreaView style={styles.container}>
       <StatusBar
          backgroundColor='#ff0054'
      />
      <SearchBar addTask={handleAddTask} onChangeText={handleTextChange} searchValue={task}/>
      <TasksList 
        data={tasksList} 
      />
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
