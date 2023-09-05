import React from 'react'
import { IFigure } from '../../screens/calculator/Calculator'
import { Image, StyleSheet, Text, View } from 'react-native'


interface IProps {
    figure: IFigure
}

export default function Figure2(props: IProps) {

    const { figure } = props
    return (
        <View style={styles.container}>
            <Text style={styles.sideB}>b = {figure.messurements.b}</Text>
            <Text style={styles.sideC}>c = {figure.messurements.c}</Text>
            <Text style={styles.sideD}>d = {figure.messurements.d}</Text>
            <Text style={styles.sideE}>e = {figure.messurements.e}</Text>
            <Text style={styles.sideF}>f = {figure.messurements.f}</Text>
            <Text style={styles.sideG}>g = {figure.resolve()}</Text>
            <Image source={figure.source} style={styles.figure} />
            <Text style={styles.sideA}>a = {figure.messurements.a}</Text>

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
        width: 300,
        resizeMode: 'contain'
    },
    sideA: {
        position: 'absolute',
        transform: [
            {translateY: 60}
        ]
    },
    sideB: {
        position: 'absolute',
        transform: [
            {translateY: 30},
            {translateX: 150}
        ]
    },
    sideC: {
        position: 'absolute',
        transform: [
            {translateY: 0},
            {translateX: 110}
        ]
    },
    sideD: {
        position: 'absolute',
        transform: [
            {translateY: 0},
            {translateX: 60}
        ]
    },
    sideE: {
        position: 'absolute',
        transform: [
            {translateY: -20},
            {translateX: 80}
        ]
    },
    sideF: {
        position: 'absolute',
        transform: [
            {translateY: -40},
            {translateX: 130}
        ]
    },
    sideG: {
        position: 'absolute',
        transform: [
            { rotate: '-25deg' },
            {translateY: -20}
        ]
    }
})