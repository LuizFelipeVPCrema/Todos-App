import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const TodoListItem = ({ todo, onPressTodo, onLongPressTodo }) =>    
    <TouchableOpacity 
        onPress={onPressTodo}
        onLongPress={onLongPressTodo}
    >
        <View style={styles.line}>
                
                <Text style={[
                    styles.lineText,
                    todo.done ? styles.lineThough : null 
                ]}>
                    { todo.text }
                </Text>
        </View>
    </TouchableOpacity>


const styles =  StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7,
    },
    lineThough: {
        textDecorationLine: 'line-through',
    },
    avatar: {
        aspectRatio: 1,
        marginLeft: 15,
        flex: 1,
        borderRadius: 50,
    },
    button: {
        aspectRatio: 1,
        borderRadius: 50,
        marginRight:14,
    }
})

export default TodoListItem;