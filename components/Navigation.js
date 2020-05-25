import { Dimensions } from "react-native"
import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createAppContainer,
} from "react-navigation"
import AllDecksView from "./AllDecksView"
import AddDeck from "./AddDeck"
import AddCard from "./AddCard"
import DeckView from "./DeckView"
import QuizView from "./QuizView"
import { black, white } from "../utils/colors"

/**
*  Navigation component to create navogation for the app
*/

/**
*  Main Tabs to navigate to AllDecksView of AddDeck view
*/

const Tabs = createMaterialTopTabNavigator(
    {
        Decks: {
            screen: AllDecksView,
            navigationOptions: {
                tabBarLabel: "Decks",
            }
        },
        AddDeck: {
            screen: AddDeck,
            navigationOptions: {
                tabBarLabel: "Add Deck",
            }
        }
    },
    {
        navigationOptions: {
            header: null
        },
        tabBarOptions: {
            activeTintColor: white,
            style: {
                height: 60,
                backgroundColor: black,
            }
        }
    }
)

/**
*  Stack Navigator
*/

const Navigator = createStackNavigator({
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

const Navigation = createAppContainer(Navigator)
export default Navigation

