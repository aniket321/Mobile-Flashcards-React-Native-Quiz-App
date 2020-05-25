import { AsyncStorage } from "react-native"
import { setAsyncStorage, STORAGE_KEY } from "./constants"

/**
* @description function to get list of decks from the asyncstorage or to set the asyncstorage if null
* @returns {object} action
*/

export const getDeckList = () => {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then((list) => {
            return list === null ? setAsyncStorage() : JSON.parse(list)
        })
}

/**
* @description function to get a particular deck with given title
* @param {string} title
* @returns {object} particular deck with title
*/

export const getDeck = title => {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then((list) => {
            const decks = JSON.parse(list)
            return decks[title]
        })
}

/**
* @description function to add new deck to Asyncstorage
* @param {object} deck
*/

export const addNewDeck = (deck) => {
    deck.questions = []
    return AsyncStorage.mergeItem(
        STORAGE_KEY,
        JSON.stringify({
            [deck.title]: deck
        })
    )
}

/**
* @description function to add new card to deck
* @param {object} card
* @param {string} title
* @returns {object} particular deck with title
*/

export const addNewCard = (card, title) => {
    console.log('in api')
    getDeck(title)
        .then((deck) => {
            deck.questions = deck.questions.concat(card)
            return AsyncStorage.mergeItem(
                STORAGE_KEY,
                JSON.stringify({
                    [title]: deck
                })
            )
        })
}
