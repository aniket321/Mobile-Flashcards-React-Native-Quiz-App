export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const ADD_CARD = "ADD_CARD"
export const ADD_DECK = "ADD_DECK"

export const receiveDecks = (decks) => {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export const addCard = (card, deckTitle) => {
    return {
        type: ADD_CARD,
        card,
        deckTitle
    }
}

//color removed from json

export const addDeck = ({ title }) => {
    return {
        type: ADD_DECK,
        title,
    }
}
