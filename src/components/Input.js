import React from "react";
import { StyleSheet, TextInput } from 'react-native';


const Input = ({ onChangeText,  value }) => {
    return(
        <TextInput
            style={styles.input} 
            onChangeText={onChangeText}
            value={value}
            underlineColorAndroid="#000"
        />
    );
}

const styles = StyleSheet.create({
    input: {
        paddingLeft: 15,
        paddingBottom: 15,
    }
})

export default Input;