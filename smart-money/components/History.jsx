import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Line } from "react-native-svg";
import LABELS from "./Labels";

const Card = (amount, time, label, desc) => {
  return (
    <View
      style={{
        width: "100%",
        height: 100,
      }}
    >
      <Text>{label}</Text>
    </View>
  );
};

export default function History() {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          margin: 20,
          color: "#505265",
        }}
      >
        Transactions
      </Text>

      <View
        style={{
          width: "100%",
          height: 80,
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",

          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <View style={{ height: "100%" }}>
          <Text
            style={{
              color: "#A5A5A5",
              textAlign: "left",
              fontSize: 16,
            }}
          >
            Chipotle
          </Text>
          <Text
            style={{
              color: "#505265",
              fontSize: 12,
              marginTop: 4,
              textAlign: "left",
            }}
          >
            Today, 12:24 PM
          </Text>
        </View>
        <View style={{ height: "100%" }}>
          <Text style={{ color: "#A5A5A5", fontSize: 16, textAlign: "right" }}>
            - 24.42 $
          </Text>
          <Text
            style={{
              color: "#505265",
              fontSize: 12,
              marginTop: 4,
              textAlign: "right",
            }}
          >
            Self-Care
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: 80,
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",

          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <View style={{ height: "100%" }}>
          <Text
            style={{
              color: "#A5A5A5",
              textAlign: "left",
              fontSize: 16,
            }}
          >
            Get-Go
          </Text>
          <Text
            style={{
              color: "#505265",
              fontSize: 12,
              marginTop: 4,
              textAlign: "left",
            }}
          >
            Today, 12:24 PM
          </Text>
        </View>
        <View style={{ height: "100%" }}>
          <Text style={{ color: "#A5A5A5", fontSize: 16, textAlign: "right" }}>
            + 113.10 $
          </Text>
          <Text
            style={{
              color: "#505265",
              fontSize: 12,
              marginTop: 4,
              textAlign: "right",
            }}
          >
            Work
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: 80,
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",

          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <View style={{ height: "100%" }}>
          <Text
            style={{
              color: "#A5A5A5",
              textAlign: "left",
              fontSize: 16,
            }}
          >
            Ben Dover
          </Text>
          <Text
            style={{
              color: "#505265",
              fontSize: 12,
              marginTop: 4,
              textAlign: "left",
            }}
          >
            Today, 2:24 PM
          </Text>
        </View>
        <View style={{ height: "100%" }}>
          <Text style={{ color: "#A5A5A5", fontSize: 16, textAlign: "right" }}>
            - 50.42 $
          </Text>
          <Text
            style={{
              color: "#505265",
              fontSize: 12,
              marginTop: 4,
              textAlign: "right",
            }}
          >
            Lend
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
