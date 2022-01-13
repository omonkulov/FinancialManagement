import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AccountScreen from '../screens/AccountScreen'
import HomeScreen from '../screens/HomeScreen'
import AddScreen from '../screens/AddScreen'
import SettingsScreen from '../screens/SettingsScreen'
import { StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
const Tab = createBottomTabNavigator()

export default function Tabs() {
    const IconsForTab = (name, iconName, focused) => {
        return (
            <View style={{ display: 'flex', alignItems: 'center' }}>
                <Ionicons name={iconName} size={focused ? 24 : 20} color={focused ? '#4287f5' : '#bababa'} />
                <Text
                    style={{
                        color: focused ? '#4287f5' : '#bababa',
                        fontSize: focused ? 12 : 8,
                    }}
                >
                    {name}
                </Text>
            </View>
        )
    }

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,

                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderTopRightRadius: 0,
                    borderTopLeftRadius: 0,
                    borderTopWidth: 0,
                    elevation: 0,
                    height: 80,
                    backgroundColor: '#222431',
                    display: 'flex',
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => IconsForTab('Home', 'home', focused),
                }}
            />
            <Tab.Screen
                name="Acccount"
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ focused }) => IconsForTab('Dash', 'ios-stats-chart', focused),
                }}
            />
            <Tab.Screen
                name="Add"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                textAlign: 'center',
                            }}
                        >
                            <AntDesign name="pluscircleo" size={62} color={focused ? '#4287f5' : '#bababa'} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="History"
                component={AddScreen}
                options={{
                    tabBarIcon: ({ focused }) => IconsForTab('History', 'time', focused),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ focused }) => IconsForTab('Settings', 'settings', focused),
                }}
            />
        </Tab.Navigator>
    )
}

const style = StyleSheet.create({
    shadow: {},
})
