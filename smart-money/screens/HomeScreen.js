import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { FlatList, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MainChart from '../components/MainChart'
import TotalNet from '../components/TotalNet'
import History from '../components/History'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-native'
import { addTransaction, deleteAllTransactions, deleteLastTransaction } from '../redux/actions'

export default function HomeScreen() {
    const transactions = useSelector((state) => state.transactions)
    const dispatch = useDispatch()
    return (
        <ScrollView style={styles.root} contentContainerStyle={{ alignItems: 'center' }}>
            <View style={styles.containerTotal}>
                <TotalNet total={38.26} />
            </View>

            <Button
                title="Add"
                onPress={() => dispatch(addTransaction(Date.now(), getRandomInt(-100, 101), 'Food', 'Chipotle'))}
            />
            <Button title="Delete" onPress={() => dispatch(deleteLastTransaction())} />
            <Button title="Delete All" onPress={() => dispatch(deleteAllTransactions())} />
            <View
                style={{
                    width: '100%',
                    height: 180,
                    borderRadius: 25,
                    paddingBottom: 5,
                    paddingTop: 5,
                    marginTop: 0,
                    marginBottom: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <MainChart data={getTransactionAmountInArray(transactions)} style={{ width: '100%' }} />
            </View>
            <History />
        </ScrollView>
    )
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

const styles = StyleSheet.create({
    containerTotal: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    root: {
        backgroundColor: '#222431',
        flex: 1,
        paddingBottom: 85,
    },
    root2: {
        backgroundColor: '#222431',
        alignSelf: 'stretch',
    },
    text: {
        color: 'white',
        padding: 68,
        margin: 10,
        backgroundColor: '#222431',
        borderRadius: 20,
        alignSelf: 'stretch',
        textAlign: 'center',
    },
})

const getTransactionAmountInArray = (transactions) => {
    let temp = []
    for (let i = 0; i < transactions.length; i++) {
        if (i == 0) temp.push(transactions[i].amount)
        else temp.push(transactions[i].amount + temp[temp.length - 1])
    }

    return temp
}
