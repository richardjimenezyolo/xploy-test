import React from 'react'
import { IFigure } from '../../screens/calculator/Calculator'
import { Image, StyleSheet, Text, View } from 'react-native'


interface IProps {
    figure: IFigure
}

export default function Figure3(props: IProps) {

    const { figure } = props
    return (
        <View style={styles.container}>
            <Text style={styles.sideB}>b = {figure.messurements.b}</Text>
            <Text style={styles.sideC}>c = {figure.messurements.c}</Text>
            <Text style={styles.sideD}>d = {figure.messurements.d}</Text>
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
        width: 250,
        resizeMode: 'contain'
    },
    sideA: {
        position: 'absolute',
        transform: [
            {translateY: 50},
            {rotate: '-20deg'}
        ]
    },
    sideB: {
        position: 'absolute',
        transform: [
            {translateX: 150},
            {translateY: -40}
        ]
    },
    sideC: {
        position: 'absolute',
        transform: [
            {translateY: -90}
        ]
    },
    sideD: {
        position: 'absolute',
        transform: [
            {translateX: -140},
            {translateY: -10}
        ]
    },
})