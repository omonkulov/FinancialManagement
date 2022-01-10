import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { FlatList, ScrollView, SafeAreaView, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainChart from "../components/MainChart";

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
      <View style={{ width: "90%", height: 200 }}>
        <MainChart
          data={[42, 30, 32, 5, 0, -21, -42]}
          total={-42}
          style={{ width: "100%" }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#000",
    flex: 1,
    alignItems: "center",
    paddingBottom: 85,
  },
  root2: {
    backgroundColor: "#000",
    alignSelf: "stretch",
  },
  text: {
    color: "white",
    padding: 68,
    margin: 10,
    backgroundColor: "#212121",
    borderRadius: 20,
    alignSelf: "stretch",
    textAlign: "center",
  },
});
