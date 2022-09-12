import React, { useState } from 'react';
import { View, Text, StyleSheet,FlatList,Button,TextInput } from 'react-native';
import { addContact, deleteAllContact, getAllContact,deleteContact } from '../realm';

const Test = () => {

  const [contacts, setContacts] = useState(getAllContact);
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState({
    id: null,
    name: null,
    familyName: null,
    phoneNumber: null,
  })

  const renderItem = ({item}) =>{
    const id = item.recordID
      return (
        <View style={styles.itemViewStyle}>
            <Text>{item.recordID}</Text>
            <Text>{item.givenName}</Text>
            <Text>{item.familyName}</Text>
            <Text>{item.phoneNumber}</Text>
            <Button title='D' onPress={()=>{
                deleteContact(id)
                setContacts(getAllContact);
            }}/>
        </View>
      );
  }
  
  return (
    <View style={styles.container}>

      <TextInput
           style={styles.input}
           placeholder="Name"
          onChangeText={text => setData(prev=>({...prev, name: text}))}
      />
      <TextInput
           style={styles.input}
           placeholder="Family Name"
          onChangeText={text => setData(prev=>({...prev, familyName: text}))}
      />
      <TextInput
           style={styles.input}
           placeholder="phone Number"
           keyboardType="numeric"
          onChangeText={text => setData(prev=>({...prev, phoneNumber: text}))}
      />

      <Button
        title='Add contacts'
        onPress={()=>{
            addContact(counter,data.name,data.familyName,Number(data.phoneNumber));
            setContacts(getAllContact);
            setCounter(counter + 1); 
        }}
      />

      <Button
        title='delte all contacts'
        onPress={()=>{
            deleteAllContact();
            setContacts(getAllContact);
            setCounter(0);
        }}
      />
      <Text style={{alignSelf:'center',fontSize:20,margin:10}}>Contacts</Text>

        <FlatList
            data={contacts}
            keyExtractor = {item =>item.recordID}
            renderItem={renderItem}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:10,
  },
  itemViewStyle: {
    flexDirection:'row',
    justifyContent:'space-between',
    margin:10
  },
  input: {
    height: 40,
    padding: 10,
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom:20
  },
});

export default Test;