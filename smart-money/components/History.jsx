import { Ionicons } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Svg, { Line } from 'react-native-svg'
import { FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import LABELS from './Labels'
import Transaction from './Transaction'
import { addTransaction } from '../redux/actions'
import { ScrollView } from 'react-native'

const NoTransactionsComp = () => {
    return <Text style={styles.noTransactions}>No Transactions have been made</Text>
}

export default function History() {
    const count = useSelector((state) => state.transactions)

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ alignItems: 'center' }}
            nestedScrollEnabled={true}
            maxHieght
            fadingEdgeLength={1}
        >
            <Text style={styles.sectionHeader}>Transactions</Text>
            {count && count.length <= 0 ? (
                <NoTransactionsComp />
            ) : (
                count.map((item, index) => {
                    return (
                        <Transaction
                            name={index + ': ' + item.name}
                            date={new Date(item.date)}
                            label={item.label}
                            amount={item.amount}
                            key={index}
                        />
                    )
                })
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: 650,
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
