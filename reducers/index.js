import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from "../actions/index"

/**
* @description reducer to return new state
* @param {object} state
* @param {object} action
* @returns {object} new state
*/

const decks = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_DECKS:
            console.log(state)
            return {
                ...state,
                ...action.decks
            }

        case ADD_CARD:
            const { card, deckTitle } = action
            console.log(state)
            let decks = {}

            decks = {
                ...state,
                [deckTitle]: {
                    ...state[deckTitle],
                    questions: state[deckTitle].questions.concat(card)
                }
            }

            return {
                ...state,
                ...decks
            }

        case ADD_DECK:
            const { title } = action

            return {
                ...state,
                [title]: {
                    title: title,
                    questions: []
                }
            }

        default:
            return state
    }
}

export default decks
