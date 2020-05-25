import React from "react"
import {
    Platform,
    Dimensions,
} from "react-native"
import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createAppContainer,
} from "react-navigation"
import { MaterialIcons, Ionicons } from "@expo/vector-icons"
import AllDecksView from "./AllDecksView"
import AddDeck from "./AddDeck"
import AddCard from "./AddCard"
import DeckView from "./DeckView"
import QuizView from "./QuizView"
import { black, white } from "../utils/colors"

const Tabs = createMaterialTopTabNavigator(
    {
        Decks: {
            screen: AllDecksView,
            navigationOptions: {
                tabBarLabel: "Decks",
                tabBarIcon: ({ tintcolor }) => (
                    <MaterialIcons name="list" size={30} color={tintcolor} />
                )
            }
        },
        AddDeck: {
            screen: AddDeck,
            navigationOptions: {
                tabBarLabel: "Add Deck",
                tabBarIcon: ({ tintcolor }) => (
                    <Ionicons name="plus-square" size={30} color={tintcolor} />
                )
            }
        }
    },
    {
        navigationOptions: {
            header: null
        },
        tabBarOptions: {
            activeTintColor: Platform.OS === "ios" ? black : white,
            style: {
                height: 56,
                backgroundColor: Platform.OS === "ios" ? white : black,
                shadowColor: "rgba(0, 0, 0, 0.24)",
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
            }
        }
    }
)

const MainNavigator = createStackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            header: null
        }
    },
    DeckView: {
        screen: DeckView,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: black
            },
            headerTitleStyle: { width: Dimensions.get("window").width }
        }
    },
    QuizView: {
        screen: QuizView,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: black
            },
            headerTitleStyle: { width: Dimensions.get("window").width }
        }
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: black
            },
            headerTitleStyle: { width: Dimensions.get("window").width }
        }
    }
})

const Navigation = createAppContainer(MainNavigator)
export default Navigation

