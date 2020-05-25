import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { connect } from "react-redux"
import { gray, green } from "../utils/colors"
import { removeNotifications, setReminder } from "../utils/helper"
import Button from './Button'

/**
*  Component to show individual deck view
*/

class DeckView extends Component {
    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params

        return {
            title: title
        }
    }
    render() {
        const { deck } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.details}>
                    <Text style={styles.title}>{deck.title}</Text>
                    <Text style={styles.total}>{deck.questions.length} {deck.questions.length < 2 ? " card" : " cards"}</Text>
                </View>
                <View>
                    <Button
                        btnText="Add new card"
                        disabled={false}
                        onPress={() =>
                            this.props.navigation.navigate("AddCard", {
                                deckTitle: deck.title,
                                deckColor: green
                            })
                        }
                    />
                    <Button
                        btnText="Start Quiz"
                        disabled={false}
                        onPress={() => {
                            removeNotifications().then(setReminder)
                            this.props.navigation.navigate("QuizView", {
                                deck: deck
                            })
                        }}
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state, { navigation }) => {
    const { title } = navigation.state.params

    return {
        title,
        deck: state[title]
    }
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        justifyContent: "space-around"
    },
    details: {
        alignSelf: "center"
    },
    title: {
        fontSize: 50,
        textAlign: "center"
    },
    total: {
        fontSize: 20,
        textAlign: "center",
        color: gray
    },
})

export default connect(mapStateToProps)(DeckView)
