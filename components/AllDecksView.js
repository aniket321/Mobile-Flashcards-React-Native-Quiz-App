import React, { Component } from "react"
import { StyleSheet, Text, ScrollView, TouchableOpacity, View } from "react-native"
import { connect } from "react-redux"
import { getDeckList } from "../utils/api"
import { receiveDecks } from "../actions"
import { AppLoading } from "expo"
import Deck from './Deck'

class AllDecksView extends Component {
    state = {
        ready: false
    }

    componentDidMount() {
        const { dispatch } = this.props

        getDeckList()
            .then(decks => {
                dispatch(receiveDecks(decks))
            })
            .then(() =>
                this.setState(() => ({
                    ready: true
                }))
            )
    }

    render() {
        const { decks } = this.props
        const { ready } = this.state

        if (ready === false) {
            return <AppLoading />
        }

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
