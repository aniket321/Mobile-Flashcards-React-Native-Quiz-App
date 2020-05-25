import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from "react-native"
import { connect } from "react-redux"
import { addCard } from "../actions"
import { addNewCard } from "../utils/api"
import { purple, white, black } from "../utils/colors"
import Button from './Button'

class AddCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            question: "",
            answer: "",
            deckTitle: this.props.deckTitle
        }
    }

    handleSubmit = () => {
        const { question, answer, deckTitle } = this.state
        const card = { question, answer }

        this.setState(() => ({
            question: "",
            answer: ""
        }))

        addNewCard(card, deckTitle)
        this.props.dispatch(addCard(card, deckTitle))
    }

    render() {
        return (
            <KeyboardAvoidingView>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Provide Question and Answer
                </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={question => this.setState({ question })}
                        value={this.state.question}
                        placeholder={"Add a question"}
                        placeholderTextColor={black}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={answer => this.setState({ answer })}
                        value={this.state.answer}
                        placeholder={"Add the answer"}
                        placeholderTextColor={black}
                    />
                    <Button
                        onPress={this.handleSubmit}
                        disabled={this.state.question === "" || this.state.answer === ""}
                        btnText="Submit"
                    />
                </View>
            </KeyboardAvoidingView >
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 10,
        height: "100%"
    },
    title: {
        alignSelf: "center",
        fontSize: 25,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 20
    },
    input: {
        height: 60,
        marginBottom: 35,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 22,
        borderRadius: 4,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: black,
    }
})

export default connect()(AddCard)
