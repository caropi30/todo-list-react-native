import React from "react";
import { Modal, Text, TouchableOpacity, View, StyleSheet } from "react-native";   
import labels from "../constants/labels";

const { CONFIRMACION_MODAL, BTN_SI, BTN_NO} = labels;
const ModalConfirmation = ({onPressYes, onPressNo, isVisible}) => {
    return (
        <Modal visible={isVisible} animationType="slide">
            <View style={style.modalView}>
                <Text style={style.modalTxt}>{CONFIRMACION_MODAL}</Text>
                <View style={style.btnContainer}>
                    <TouchableOpacity style={[style.btn, style.btnSi]} onPress={onPressYes}>
                        <Text style={style.btnTxt}>{BTN_SI}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[style.btn, style.btnNo]} onPress={onPressNo}>
                        <Text style={style.btnTxt}>{BTN_NO}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
};

const style = StyleSheet.create({
    modalView: {
        flex: 1,
        backgroundColor: '#cbf3f0',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    modalTxt:{
        color: '#ff0054',
        fontSize: 28,
        textAlign: 'center',
        fontWeight: '500',
    },
    btnContainer: {
        flexDirection: 'row',
        gap: 20,
        marginVertical: 20
    },
    btn: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 5
    },
    btnTxt:{
        color: '#fff',
        fontWeight: '600',
    },
    btnSi:{
        backgroundColor: '#e63946',
        
    },
    btnNo:{
        backgroundColor: '#ff5400'
    },
})

export default ModalConfirmation;