import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import SearchBar from "./src/components/SearchBar";
import TasksList from "./src/components/TasksList";
import useTaks from "./src/hooks/useTask";
import ModalConfirmation from "./src/components/ModalConfirmation";


export default function App() {
    const { task, tasksList, selectedId, isVisible, handleTextChange, handleAddTask, handleDeleteTask, handleModalConfirmation, openModal } = useTaks();
    console.log('selectedId en app: ', selectedId)
    console.log('task en app: ', task)
    console.log('tasksList en app: ', tasksList)
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor='#ff0054'
            />
            <SearchBar addTask={handleAddTask} onChangeText={handleTextChange} searchValue={task.title} />
            <TasksList
                data={tasksList}
                onPressYes={handleDeleteTask}
                onPressNo={handleModalConfirmation}
                deleteTask={openModal}
                isVisible={isVisible}
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
