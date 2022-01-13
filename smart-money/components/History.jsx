import { Ionicons } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Svg, { Line } from 'react-native-svg'
import { FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import LABELS from './Labels'
import Transaction from './Transaction'
import { addTransaction } from '../redux/actions'

const NoTransactionsComp = () => {
    return <Text style={styles.noTransactions}>No Transactions have been made</Text>
}

export default function History() {
    const count = useSelector((state) => state.transactions)
    const dispatch = useDispatch()

    const renderItem = (data) => {
        console.log(data.item.amount)
        return (
            <Transaction
                name={data.item.name}
                date={new Date(data.item.date)}
                label={data.item.label}
                amount={data.item.amount}
            />
        )
    }

    //Test
    useEffect(() => {
        dispatch(addTransaction(Date.now(), Math.floor(Math.random() * 200), 'Food', 'Chipotle'))
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.sectionHeader}>Transactions</Text>
            {count && count.length <= 0 ? (
                <NoTransactionsComp />
            ) : (
                <FlatList
                    style={{ width: '100%' }}
                    data={count}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    sectionHeader: {
        textAlign: 'center',
        fontSize: 18,
        width: '80%',
        color: '#777C91',
        borderBottomColor: '#30313d',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    noTransactions: {
        textAlign: 'center',
        fontSize: 12,
        margin: 50,
        color: '#505265',
    },
})
