import React, { Component } from "react"
import { StyleSheet, Text, TouchableOpacity, View, Platform } from "react-native"
import { white, blue, gray, black, purple } from '../utils/colors'

export default class Button extends Component {

    render() {
        const { onPress, disabled, btnText } = this.props
        return (
            <TouchableOpacity
                style={[styles.button, disabled && styles.disabledBtn]}
                onPress={onPress}
                disabled={disabled}
            >
                <Text
                    style={styles.btnText}
                >
                    {btnText}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: black,
        borderRadius: Platform.OS === 'ios' ? 16 : 5,
        padding: 10,
        marginLeft: 70,
        marginRight: 70,
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    disabledBtn: {
        backgroundColor: gray
    },
    btnText: {
        color: white,
        fontSize: 22,
        fontWeight: "600"
    }
})


