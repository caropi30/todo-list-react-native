import React from 'react';  
import { View, TextInput, Pressable, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import labels from '../constants/labels';

const {PLACEHOLDER,  BTN_AGREGAR } = labels;

const SearchBar = (props) => {
    const {addTask, searchValue, onChangeText} = props;
    return (
        <View style={style.container}>
            <TextInput 
                placeholder={PLACEHOLDER}  
                onChangeText={onChangeText}
                value={searchValue} 
                placeholderTextColor={style.input.color}  
                style={style.input}/>
            <TouchableOpacity style={style.btn} onPress={addTask}>
                <Text style={style.btnTxt}>{BTN_AGREGAR}</Text>
            </TouchableOpacity>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 30,
    },
    input: {
        width: '70%',
        paddingVertical: 5,
        paddingHorizontal: 20,
        color: '#ff0054',
        borderRadius: 5,
        borderWidth: 1, 
        borderColor: '#ff0054'
    },
    btn: {
        backgroundColor: '#ff0054',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginLeft: 5,
    },
    btnTxt: {
        color: '#fff',
        fontWeight: '600',
    }


})

export default SearchBar;