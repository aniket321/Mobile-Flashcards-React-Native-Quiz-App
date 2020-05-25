export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const ADD_CARD = "ADD_CARD"
export const ADD_DECK = "ADD_DECK"

/**
* @description action set the store with decklist
* @param {object} decks
* @returns {object} action
*/

export const receiveDecks = (decks) => {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

/**
* @description action add a new card
* @param {object} card
* @param {string} deckTitle
* @returns {object} action
*/

export const addCard = (card, deckTitle) => {
    return {
        type: ADD_CARD,
        card,
        deckTitle
    }
}

/**
* @description action set the store with decklist
* @param {object} title
* @returns {object} action
*/

export const addDeck = ({ title }) => {
    return {
        type: ADD_DECK,
        title,
    }
}
