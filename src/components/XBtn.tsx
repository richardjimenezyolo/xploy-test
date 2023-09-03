import React from 'react';
import { Text, StyleSheet, Pressable, StyleProp, PressableProps, ViewStyle } from 'react-native';

interface IProps {
  title: string,
  onPress?: () => void,
}

const XBtn: React.FC<IProps> = (props: IProps) => {
  const { onPress = () => ({}), title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#009ec0',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default XBtn