import React, { Component } from "react"
import { StyleSheet, Text } from "react-native"

/**
* @description component to show a text message on all views
*/

export default class TextMessage extends Component {

    render() {
        const { message } = this.props
        return (
            <Text style={styles.text}>{message}</Text>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        marginTop: 30
    }
})


