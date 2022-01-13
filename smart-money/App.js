import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './components/Tabs'
import { useFonts } from '@expo-google-fonts/inter'
import { Provider } from 'react-redux'
import reduxStore from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {
    const { store, persistor } = reduxStore()
    const Test = () => {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }
    return (
        <Provider store={store}>
            <PersistGate loading={<Test />} persistor={persistor}>
                <NavigationContainer>
                    <Tabs />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    )
}
