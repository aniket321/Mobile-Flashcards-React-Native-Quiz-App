import { AsyncStorage } from "react-native"
export const STORAGE_KEY = "deckList:decks"

export const setAsyncStorage = () => {
    const decks = {
        React: {
            title: "React",
            questions: [
                {
                    question: "What is React?",
                    answer: "A library for managing user interfaces"
                },
                {
                    question: "Where do you make Ajax requests in React?",
                    answer: "The componentDidMount lifecycle event"
                }
            ],
        },
        JavaScript: {
            title: "JavaScript",
            questions: [
                {
                    question: "What is a closure?",
                    answer:
                        "The combination of a function and the lexical environment within which that function was declared."
                }
            ],
        }
    }
    AsyncStorage.removeItem(STORAGE_KEY)
        .then(() => {
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(dummyData))
        })

    return decks
}
