import React from 'react'
import { IFigure } from '../Calculator'
import { Image, StyleSheet, Text, View } from 'react-native'


interface IProps {
    figure: IFigure
}
export default function RightFigure(props: IProps) {

    const { figure } = props
    return (
        <View style={styles.container}>
            <Text style={styles.sideB}>b = {figure.messurements.b}</Text>
            <Text style={styles.sideC}>c = {figure.messurements.c}</Text>
            <Image source={figure.source} style={styles.figure} />
            <Text style={styles.sideA}>a = {figure.resolve()}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    figure: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    sideA: {
        position:'absolute',
        transform: [
            {translateY: 70}
        ]
    },
    sideB: {
        position: 'absolute',
        transform: [
            { translateX: 120 },
        ]
    },
    sideC: {
        position: 'absolute',
        transform: [{ rotate: '-25deg' }, {translateY: -15}]
    },
})