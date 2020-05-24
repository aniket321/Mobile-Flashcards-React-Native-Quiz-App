import { AsyncStorage } from "react-native"
import { setAsyncStorage, STORAGE_KEY } from "./constants"

export const getDeckList = () => {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then((list) => {
            return list === null ? setAsyncStorage() : JSON.parse(list)
        })
}

export const getDeck = id => {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then((list) => {
            const data = JSON.parse(list)
            return data[id]
        })
}

export const addNewDeck = (deck) => {
    deck.questions = []
    return AsyncStorage.mergeItem(
        STORAGE_KEY,
        JSON.stringify({
            [deck.title]: deck
        })
    )
}

export const addNewCard = (card, id) => {
    getDeck(id)
        .then((deck) => {
            deck.questions = deck.questions.concat(card)
            return AsyncStorage.mergeItem(
                STORAGE_KEY,
                JSON.stringify({
                    [id]: deck
                })
            )
        })
}
