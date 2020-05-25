import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
} from "react-native"
import { addNewDeck } from "../utils/api"
import { connect } from "react-redux"
import { addDeck } from "../actions"
import { white, black } from "../utils/colors"
import Button from './Button'

class AddDeck extends React.Component {

    /**
    * @description state to record the value of title of newly added deck to dispatch value to store
    */

    constructor(props) {
        super(props)
        this.state = { title: "" }
    }

    /**
    * @description function to handle submit button to save value of the title to Asyncstorage and dispatch value to store
    */

    handleSubmit = () => {
        const deck = this.state
        this.setState(() => ({
            title: "",
        }))

        addNewDeck(deck)
        this.props.dispatch(addDeck(deck))
        this.props.previousView()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Enter Title of the Deck
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={title => this.setState({ title })}
                    value={this.state.title}
                />
                <Button
                    onPress={this.handleSubmit}
                    disabled={this.state.title === ""}
                    btnText="Submit"
                />
            </View>
        )
    }
}

const mapStateToProps = (state, { navigation }) => {
    return {
        previousView: () => navigation.goBack()
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        height: "100%",
        backgroundColor: white,
        justifyContent: "center"
    },
    title: {
        fontSize: 35,
        margin: 10,
        marginBottom: 35,
        alignSelf: "center",
        fontWeight: "600"
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

export default connect(mapStateToProps)(AddDeck)