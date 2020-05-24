import React, { Component } from "react"
import { StyleSheet, Text, ScrollView, TouchableOpacity, View } from "react-native"
import { connect } from "react-redux"
import { getDeckList } from "../utils/api"
import { receiveDecks } from "../actions"

class DeckList extends Component {
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
                            >
                                <View >
                                    <Text >{decks[title].title}</Text>
                                    <Text >{decks[title].questions.length}</Text>
                                </View>
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

export default connect(mapStateToProps)(DeckList)
