import React, { Component } from "react"
import { StyleSheet, Text } from "react-native"

/**
* @description component to show a text message on all views
*/

const TextMessage = (props) => {
    const { message } = props
    return (
        <Text style={styles.text}>{message}</Text>
    )
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

export default TextMessage

