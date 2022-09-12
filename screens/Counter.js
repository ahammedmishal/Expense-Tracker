import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment } from '../redux-toolkit/CounterSlice';

const Counter = () => {

    const value = useSelector((state) => {
        return state.value
    });

    const dispatch = useDispatch();

    console.log(value)

  return (
    <View style={styles.container}>
        <Button onPress={()=>{dispatch(increment())}} title='Increment'/>
        <Text>{value}</Text>
        <Button onPress={()=>{dispatch(decrement())}} title='Decrement'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row'
  }
});

export default Counter;