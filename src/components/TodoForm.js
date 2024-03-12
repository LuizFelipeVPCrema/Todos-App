import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

import { connect } from "react-redux";

import Input from './Input'
import { addTodo } from "../actions";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    onChangeText(text) {
        this.setState({
            text
        });
    }
    
    onPress() {
        this.state.text.trim() !== '' && this.props.dispatchAddTodo(this.state.text);
        this.setState({ text: '' });
    }


    render() {
        const { text } = this.state;
        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input 
                        onChangeText={text => this.onChangeText(text)}
                        value={text}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        onPress={() => this.onPress()}
                        title="add"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer : {
        flexDirection: 'row',
        paddingTop: 30
    },
    inputContainer: {
        flex: 4
    },
    buttonContainer: {
        flex: 1
    }

})

// const mapDispatchToProps = dispatch => {
//     return {
//         dispatchAddTodo: text => dispatch(addTodo(text))
//     }
// }

// const mapDispatchToProps = {
//     dispatchAddTodo: addTodo
// }

export default connect(null, { dispatchAddTodo: addTodo })(TodoForm);