import React from 'react'
import { IFigure } from './Calculator'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function ReviewScreen(props: { figures: IFigure[] }) {

    const { figures } = props

    return (
        <SafeAreaView>
            <ScrollView style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 100 }}>
                {
                    figures.map((figure) => (
                        <View key={figure.name}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 20 }}>
                                    <Text style={{fontWeight: '600'}}>Figure: </Text>
                                    {figure.name}
                                </Text>
                            </View>
                            <View style={styles.container} key={figure.name}>
                                {figure.component()}
                            </View>
                        </View>
                    ))
                }
                <View style={{ height: 200 }}></View>
            </ScrollView>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    figures: {
        width: 250,
        height: 250,
        resizeMode: 'contain'
    },
    inputs: {
        borderColor: '#999',
        borderWidth: 2,
        width: 200,
        borderRadius: 5
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10
    },
    pickMe: {
        borderColor: '#999',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10

    }
})