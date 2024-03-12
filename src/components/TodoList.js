import React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import TodoListItem from './TodoListItem'
import { toggleTodo } from "../actions";

const TodoList = ({ todos, dispatchToggleTODO }) => (
        <View>
            { todos.map(todo => (
                <TodoListItem 
                    key={todo.id} 
                    todo={todo} 
                    onPressTodo={ () => dispatchToggleTODO(todo.id) }
                /> 
            ))}
        </View>
);

const styles = StyleSheet.create({

})

const mapStateToProps = state => {
    const { todos } = state;
    return { todos };
}

export default connect(mapStateToProps, { dispatchToggleTODO: toggleTodo })(TodoList);