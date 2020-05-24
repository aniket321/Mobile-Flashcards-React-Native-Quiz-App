import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./reducers"
import middleware from './middleware'
import AllDecksView from './components/AllDecksView'
import AddDeck from './components/AddDeck'


export default class App extends React.Component {
    render() {
        const store = createStore(reducer, middleware)
        return (
            <Provider store={store}>
                <View style>
                    <Text style={styles.welcome}>This is react</Text>
                </View>
                {/* <AllDecksView /> */}
                {/* <AddDeck /> */}
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
