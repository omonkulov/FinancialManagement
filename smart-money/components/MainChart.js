import React from "react";
import { AreaChart } from "react-native-svg-charts";
import * as shape from "d3-shape";
import { Defs, LinearGradient, Stop } from "react-native-svg";

export default function MainChart({ data, total }) {
  const Gradient = ({ index }) => (
    <Defs key={index}>
      <LinearGradient
        id={"gradientWin"}
        x1={"0%"}
        y1={"0%"}
        x2={"0%"}
        y2={"100%"}
      >
        <Stop offset={"0%"} stopColor={"rgb(0, 255, 0)"} stopOpacity={0.7} />
        <Stop offset={"100%"} stopColor={"rgb(0, 255, 0)"} stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id={"gradientLoss"}
        x1={"0%"}
        y1={"0%"}
        x2={"0%"}
        y2={"100%"}
      >
        <Stop offset={"0%"} stopColor={"rgb(255, 0, 0)"} stopOpacity={0.7} />
        <Stop offset={"100%"} stopColor={"rgb(255, 0, 0)"} stopOpacity={0} />
      </LinearGradient>
    </Defs>
  );

  return (
    <AreaChart
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        margin: "auto",
        top: 0,
      }}
      data={data}
      contentInset={{ top: 5, bottom: 5, right: 2 }}
      curve={shape.curveCatmullRom}
      animate={true}
      animationDuration={600}
      svg={{
        fill: `url(${total > 0 ? "#gradientWin" : "#gradientLoss"})`,
        stroke: `${total > 0 ? "green" : "red"}`,
      }}
    >
      <Gradient />
    </AreaChart>
  );
}
