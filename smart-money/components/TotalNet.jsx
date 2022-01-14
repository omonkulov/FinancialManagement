import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

export default function TotalNet() {
    const total = useSelector((state) => state.total)
    return (
        <View style={styles.root}>
            <Text style={styles.secondary}>Today</Text>
            <Text style={styles.amount}>$ {total}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    amount: {
        fontSize: 48,
        fontWeight: '200',
        color: '#F2F5FF',
    },
    secondary: {
        fontSize: 18,
        marginBottom: 18,
        color: '#505265',
    },
})
