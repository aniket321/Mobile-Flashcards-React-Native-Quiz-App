import React, { Component } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { white, blue, gray, black, purple } from '../utils/colors'

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


