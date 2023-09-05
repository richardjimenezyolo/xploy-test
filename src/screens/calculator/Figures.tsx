import React, { useState } from 'react'
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IFigure } from './Calculator'

interface IProps {
    figures: IFigure[],
    toggle: (figure: IFigure) => void
}

const Figures: React.FC<IProps> = (props: IProps) => {
    const { figures, toggle } = props
    return (
        <SafeAreaView>
            <ScrollView style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 100 }}>
                {
                    figures.map((figure) => (
                        <View key={figure.name}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 20, fontWeight: '600' }}>
                                    {figure.name}
                                </Text>

                                {
                                    figure.picked ?
                                        <Pressable style={styles.pickMe} onPress={() => toggle(figure)}>
                                            <Text style={{ fontSize: 16, fontWeight: '600' }}>
                                                unselect
                                            </Text>
                                        </Pressable>
                                        : <Pressable
                                            style={styles.pickMe}
                                            onPress={() => {
                                                toggle(figure)
                                                figure.resolve()
                                            }}
                                        >
                                            <Text style={{ fontSize: 16, fontWeight: '600' }}>Pick Figure</Text>
                                        </Pressable>
                                }
                            </View>
                            <View style={styles.container} key={figure.name}>
                                <Image
                                    source={figure.source}
                                    style={styles.figures}
                                />
                                <View>
                                    <Text style={{ fontWeight: '800', fontSize: 20 }}>
                                        Messurements:
                                    </Text>
                                    {Object.keys(figure.messurements).map(side => (
                                        <View style={styles.inputContainer} key={side}>
                                            <Text style={{ fontSize: 20, paddingRight: 30 }}>
                                                {side}
                                            </Text>
                                            <TextInput
                                                style={styles.inputs}
                                                keyboardType='numeric'
                                                onChangeText={val => {
                                                    figure.messurements[side] = val
                                                }}
                                            />
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </View>
                    ))
                }
                <View style={{ height: 200 }}></View>
            </ScrollView>
        </SafeAreaView>
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

export default Figures