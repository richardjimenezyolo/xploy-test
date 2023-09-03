import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'


interface IProps {
    label: String,
    errorMessages?: String,
    onChange?: any,
    value?: string,
    password?: boolean
}

const XTextInput: React.FC<IProps> = (props: IProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                style={styles.text}
                secureTextEntry={props.password}
                value={props.value}
                onChangeText={props.onChange}
            />
            {props.errorMessages ? <Text style={styles.errors}>{props.errorMessages}</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
    },
    text: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        color: 'black'
    },
    label: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'Lato',
        fontWeight: '800'
    },
    errors: {
        color: 'red',
        fontWeight: '800',
        fontSize: 18
    }
})

export default XTextInput