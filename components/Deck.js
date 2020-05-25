import React, { Component } from "react"
import { StyleSheet, Text, TouchableOpacity, View, Platform } from "react-native"
import { gray } from '../utils/colors'

/**
* @description Individual card to show a deck on all decks view
*/

export default class Deck extends Component {

    render() {
        const { title, numberOfCards } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text >{numberOfCards} {numberOfCards < 2 ? "card" : "cards"}</Text>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: gray,
        borderRadius: Platform.OS === 'ios' ? 16 : 5,
        padding: 20,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 12,
        marginBottom: 5,
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
    title: {
        fontSize: 30,
        fontWeight: "bold"
    }
})


