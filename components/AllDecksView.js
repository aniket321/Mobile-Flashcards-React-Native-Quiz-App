import React, { Component } from "react"
import { StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native"
import { connect } from "react-redux"
import { getDeckList } from "../utils/api"
import { receiveDecks } from "../actions"
import Deck from './Deck'

class AllDecksView extends Component {

    /**
    * @description function to get list of decks from the constants file
    *              used as DB and dispatch to the store and also set the Asyncstorage
    */
    componentDidMount() {
        const { dispatch } = this.props

        getDeckList()
            .then(decks => {
                dispatch(receiveDecks(decks))
            })
    }

    render() {
        const { decks } = this.props

        if (decks) {
            return (
                <ScrollView>
                    {Object.keys(decks).map((title) => {
                        return (
                            <TouchableOpacity
                                key={title}
                                onPress={() =>
                                    this.props.navigation.navigate("DeckView", {
                                        title: title
                                    })
                                }
                            >
                                <Deck
                                    title={decks[title].title}
                                    numberOfCards={decks[title].questions.length}
                                />
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            )
        }
    }
}

const mapStateToProps = decks => {
    return {
        decks,
    }
}

export default connect(mapStateToProps)(AllDecksView)
