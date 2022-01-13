import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Transaction({ date, name, label, amount }) {
    return (
        <View
            style={{
                width: '100%',
                height: 80,
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                paddingLeft: 30,
                paddingRight: 30,
                paddingTop: 20,
            }}
        >
            <View style={{ height: 80 }}>
                <Text
                    style={{
                        color: '#A5A5A5',
                        textAlign: 'left',
                        fontSize: 16,
                    }}
                >
                    {name}
                </Text>
                <Text
                    style={{
                        color: '#505265',
                        fontSize: 12,
                        marginTop: 4,
                        textAlign: 'left',
                    }}
                >
                    {`${date.getDate()} ${getMonth(date.getMonth())} ${date.getFullYear()}`}
                </Text>
            </View>
            <View style={{ height: 80 }}>
                <Text style={{ color: '#A5A5A5', fontSize: 16, textAlign: 'right' }}>{amount} $</Text>
                <Text
                    style={{
                        color: '#505265',
                        fontSize: 12,
                        marginTop: 4,
                        textAlign: 'right',
                    }}
                >
                    {label}
                </Text>
            </View>
        </View>
    )
}

const getMonth = (num) => {
    switch (num) {
        case 0:
            return 'Jan'

        case 1:
            return 'Feb'

        case 2:
            return 'Mar'

        case 3:
            return 'Apr'

        case 4:
            return 'May'

        case 5:
            return 'Jun'

        case 6:
            return 'Jul'

        case 7:
            return 'Aug'

        case 8:
            return 'Sept'

        case 9:
            return 'Oct'

        case 10:
            return 'Nov'
        case 11:
            return 'Dec'

        default:
            return 'Idk'
    }
}
const styles = StyleSheet.create({})
