import React from "react";
import { View, Text, Pressable, StyleSheet, TouchableOpacity} from 'react-native';
import labels from '../constants/labels';

const { BTN_EDITAR_TAREA, BTN_ELIMINAR_TAREA } = labels;

const Task = (props) => {
    const {task, deleteTask, key} = props;

    return (
        <View style={[style.container, style.mainContainer]} key={key}>
            <Text style={style.mainContainerTxt}>{task}</Text>
            <View style={style.container}>
                {/* <Pressable style={[style.btn, style.btnEditar]}>
                    <Text style={style.txt}>{BTN_EDITAR_TAREA}</Text> 
                </Pressable> */}
                <TouchableOpacity style={[style.btn, style.btnEliminar]} onPress={deleteTask}>
                    <Text style={style.txt}>{BTN_ELIMINAR_TAREA}</Text> 
                </TouchableOpacity>
            </View>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    mainContainer: {
        backgroundColor: '#cbf3f0',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '94%',
        marginBottom: 15,
        marginLeft: 10
    },
    mainContainerTxt: {
        color: '#ff0054',
        fontSize: 16,
        fontWeight: '500'
    },
    secondaryContainer:{
        width: '30%'
    },
    txt: {
        color: '#fff',
        fontWeight: '500',
    },
    btn: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5
    },
    btnEliminar: {
        backgroundColor: '#e63946',
        marginLeft: 5
    },
    btnEditar:{
        backgroundColor: '#ff5400'
    }
})

export default Task;