import React from 'react'
import { AreaChart, Grid, LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import Svg, { Circle, ClipPath, Defs, G, Line, LinearGradient, Path, Rect, Stop, Text } from 'react-native-svg'
import { TouchableOpacity } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import { Dimensions } from 'react-native'

export default function MainChart({ data }) {
    const Decorator = ({ x, y, data }) => {
        return data.map((value, index) => {
            return (
                <Circle
                    cx={x(index)}
                    cy={y(value)}
                    key={index}
                    r={5}
                    stroke={'#222431'}
                    strokeWidth={2}
                    fill={`${value == 0 ? '#777C91' : value > 0 ? 'lightgreen' : 'red'}`}
                />
            )
        })
    }

    const getYPosition = (pos) => {
        if (pos > 180) return pos - 20
        if (pos < 20) return pos + 20
        return pos - 10
    }
    const getXPosition = (pos) => {
        if (pos > Dimensions.get('window').width - 20) return pos - 10
        if (pos < 20) return pos + 10
        return pos
    }

    const Values = ({ x, y, data }) => {
        return data.map((value, index) => (
            <Text
                key={index}
                fill="#F2F5FF"
                fontSize="10"
                fontWeight="bold"
                x={getXPosition(x(index))}
                y={getYPosition(y(value))}
                textAnchor={'middle'}
            >
                {data[index]}
            </Text>
        ))
    }

    const HorizontalLine = ({ y }) => (
        <Line
            key={'zero-axis'}
            x1={'2%'}
            x2={'98%'}
            y1={y(0)}
            y2={y(0)}
            stroke={'#5F617A'}
            strokeDasharray={[6, 6]}
            strokeWidth={1}
            svg={{ zIndex: -1 }}
        />
    )

    return (
        <LineChart
            style={{
                height: '100%',
                width: '100%',
                position: 'absolute',
                margin: 'auto',
            }}
            data={data.slice(Math.max(data.length - 10, 0))}
            contentInset={{ top: 10, bottom: 10, right: 10, left: 10 }}
            curve={shape.curveCatmullRom}
            animate={true}
            animationDuration={600}
            svg={{
                stroke: `#777C91`,
                strokeWidth: 2,
                zIndex: 10,
            }}
        >
            <HorizontalLine />
            <Decorator />
            <Values />
        </LineChart>
    )
}
