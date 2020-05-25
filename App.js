import React from "react"
import {
    StatusBar,
    StyleSheet,
    View
} from "react-native"
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./reducers"
import { SafeAreaView } from "react-navigation"
import Constants from "expo-constants"
import middleware from "./middleware"
import Navigation from "./components/Navigation"
import { black, white } from "./utils/colors"
import { setLocalNotification } from "./utils/helper"

export default class App extends React.Component {
    componentDidMount() {
        setLocalNotification()
    }
    render() {
        const store = createStore(reducer, middleware)
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Navigation />
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white
    }
})
