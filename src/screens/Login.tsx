import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import XTextInput from '../components/XTextInput';
import XBtn from '../components/XBtn';

function LoginScreen({navigation}): JSX.Element {

  const [username, setUser] = useState('')
  const [passowrd, setPwd] = useState('')
  const [rembemberMe, setRemember] = useState(false)
  const [errors, setErrors] = useState('')

  const validate = () => {
    if (username === 'admin' && passowrd === '1234') {
      setErrors('')
      navigation.navigate('Calculator')
      return
    }
    setErrors('Username or password invalid')
  }

  return (

    <SafeAreaView style={styles.backgroundStyle}>
      <View style={{ width: '70%', marginTop: 100, display: 'flex' }}>

        <View style={styles.header}>
          <Text style={{ fontSize: 32, color: 'white' }}>[Logo]</Text>
        </View>

        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 28 }}>
            Account Login
          </Text>
        </View>

        <XTextInput
          label="Username"
          value={username}
          errorMessages={errors}
          onChange={(val: String) => setUser(val)}
        />
        <XTextInput password label="Password" onChange={(pwd) => setPwd(pwd)} />

        <View style={styles.rembemberMe}>
          <CheckBox value={rembemberMe} onValueChange={setRemember} />
          <Text style={{ fontSize: 18 }}>Remember me</Text>
        </View>



        <XBtn title='Login' onPress={validate} />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    height: 100,
    backgroundColor: '#999',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 2,
  },
  rembemberMe: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10
  }
}

);

export default LoginScreen;
