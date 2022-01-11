import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { FlatList, ScrollView, SafeAreaView, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainChart from "../components/MainChart";
import TotalNet from "../components/TotalNet";
import History from "../components/History";

export default function HomeScreen() {
  useEffect(async () => {
    console.log("hello");
    try {
      await AsyncStorage.setItem("@storage_Key", "Test");
      const value = await AsyncStorage.getItem("@storage_Key");
      console.log(value);
    } catch (e) {
      // saving error
    }
  }, []);
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.containerTotal}>
        <TotalNet total={38.26} />
      </View>
      <View
        style={{
          width: "100%",
          height: 180,
          borderRadius: 25,
          paddingBottom: 5,
          paddingTop: 5,
          marginTop: 0,
          marginBottom: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MainChart data={[0, -24.42, 88.68, 38.26]} style={{ width: "100%" }} />
      </View>

      <History />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerTotal: {
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  root: {
    backgroundColor: "#222431",
    flex: 1,
    alignItems: "center",
    paddingBottom: 85,
  },
  root2: {
    backgroundColor: "#222431",
    alignSelf: "stretch",
  },
  text: {
    color: "white",
    padding: 68,
    margin: 10,
    backgroundColor: "#222431",
    borderRadius: 20,
    alignSelf: "stretch",
    textAlign: "center",
  },
});
