import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
  Modal,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  addCategory,
  deleteAllCategory,
  getAllCategory,
  deleteCategory,
  updateCategory,
  addExpense,
} from '../realm1';

const Test1 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [isSelected, setIsSelected] = useState('');
  const [recordId, setRecordId] = useState(null);
  const [category, setCategory] = useState(getAllCategory);
  const [counter, setCounter] = useState(0);
  const [expenseId, setExpenseId] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [expenseArray, setExpenseArray] = useState([]);
  const [data, setData] = useState({
    name: null,
    color: null,
    icon: null,
    title: null,
    description: null,
    location: null,
    total: null,
    status: null,
  });

  /// Category Listing
  const renderItem = ({item}) => {
    const id = item.categoryID;
    return (
        isSelected == item.name ? 
        (
          <View style={styles.itemViewStyle}>
          {/* <Text>{item.categoryID}</Text> */}
          <Text>{item.name}</Text>
          <Text>{item.icon}</Text>
          <Text>{expenseArray.title}</Text>
          <Text>{expenseArray.description}</Text>
          <Text>{expenseArray.location}</Text>
          <Text>{expenseArray.total}</Text>
          <Text>{expenseArray.status}</Text>
          <Button
            title="D"
            onPress={() => {
              deleteCategory(id);
              setCategory(getAllCategory);
            }}
          />
          <Button title="E" onPress={()=>{
            setRecordId(id);
            handleEditModal();
          }} />
        </View>
        ) : null
      ) 
  };

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleEditModal = () => {
    setEditModalVisible(!editModalVisible);
  };

  const handleCategoryModal = () => {
    setCategoryModalVisible(!categoryModalVisible);
  }

  function showEditModal() {
    return (
      <Modal
        isVisible={editModalVisible}
        animationType="slide"
        transparent={false}>
        <Button title="Hide Modal" onPress={handleEditModal} />
        <TextInput
          style={styles.input}
          placeholder="title"
          onChangeText={text => setData(prev => ({...prev, title: text}))}
        />
        <TextInput
          style={styles.input}
          placeholder="description"
          onChangeText={text => setData(prev => ({...prev, description: text}))}
        />
        <TextInput
          style={styles.input}
          placeholder="location"
          onChangeText={text => setData(prev => ({...prev, location: text}))}
        />
        <TextInput
          style={styles.input}
          placeholder="total"
          keyboardType="numeric"
          onChangeText={text => setData(prev => ({...prev, total: text}))}
        />
        <TextInput
          style={styles.input}
          placeholder="status"
          onChangeText={text => setData(prev => ({...prev, status: text}))}
        />

        <Button
          title="Update Category"
          onPress={() => {
            updateCategory(
              expenseId,
              data.title,
              data.description,
              data.location,
              Number(data.total),
              data.status,
            );
            setCategory(getAllCategory);
            //setCounter(counter + 1);
            handleEditModal();
          }}
        />
      </Modal>
    );
  }

  function showModal() {
    return (
      <Modal isVisible={modalVisible} animationType="slide" transparent={false}>
        <Button title="Hide Modal" onPress={handleModal} />
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={text => setData(prev => ({...prev, name: text}))}
        />
        <TextInput
          style={styles.input}
          placeholder="color"
          onChangeText={text => setData(prev => ({...prev, color: text}))}
        />
        <TextInput
          style={styles.input}
          placeholder="icon"
          onChangeText={text => setData(prev => ({...prev, icon: text}))}
        />
        <TextInput
          style={styles.input}
          placeholder="title"
          onChangeText={text => setData(prev => ({...prev, title: text}))}
        />
        <TextInput
          style={styles.input}
          placeholder="description"
          onChangeText={text => setData(prev => ({...prev, description: text}))}
        />
        <TextInput
          style={styles.input}
          placeholder="location"
          onChangeText={text => setData(prev => ({...prev, location: text}))}
        />
        <TextInput
          style={styles.input}
          placeholder="total"
          keyboardType="numeric"
          onChangeText={text => setData(prev => ({...prev, total: text}))}
        />
        <TextInput
          style={styles.input}
          placeholder="status"
          onChangeText={text => setData(prev => ({...prev, status: text}))}
        />

        <Button
          title="Add Category"
          onPress={() => {
            addCategory(
              data.name,
              data.color,
              data.icon,
              data.title,
              data.description,
              data.location,
              Number(data.total),
              data.status,
            );
            setCategory(getAllCategory);
            setCategoryId(categoryId + 1);
            setExpenseId(expenseId + 1);
            handleModal();
          }}
        />
      </Modal>
    );
  }

  function addCategoryModal() {
    return (
      <Modal isVisible={categoryModalVisible} animationType="slide" transparent={false}>
        <Button title="Hide Modal" onPress={handleCategoryModal} />

        <TextInput
          style={styles.input}
          placeholder="title"
          onChangeText={text => setData(prev => ({...prev, title: text}))}
        />

        <TextInput
          style={styles.input}
          placeholder="description"
          onChangeText={text => setData(prev => ({...prev, description: text}))}
        />
        <TextInput
          style={styles.input}
          placeholder="location"
          onChangeText={text => setData(prev => ({...prev, location: text}))}
        />
        <TextInput
          style={styles.input}
          placeholder="total"
          keyboardType="numeric"
          onChangeText={text => setData(prev => ({...prev, total: text}))}
        />
        <TextInput
          style={styles.input}
          placeholder="status"
          onChangeText={text => setData(prev => ({...prev, status: text}))}
        />

        <Button
          title="Add Category"
          onPress={() => {
            addExpense(
              categoryId,
              data.title,
              data.description,
              data.location,
              Number(data.total),
              data.status,
            );
            setCategory(getAllCategory);
            // setCategoryId(categoryId + 1);
            // setExpenseId(expenseId + 1);
            handleCategoryModal();
          }}
        />
      </Modal>
    )
  }

  const selectCategory = (name,color,icon,eid,cid) => {
    setIsSelected(name);
    setData({name:name,color:color,icon:icon});
    setExpenseArray(eid)
    setExpenseId(expenseArray.expenseID);
    setCategoryId(cid);
    console.log("exp",expenseId);
    console.log("cat",categoryId);
  }

  function renderCategoryNames(){
    const renderItem = ({item}) =>{
      return(
      <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
        <TouchableOpacity onPress={()=>selectCategory(item.name,item.color,item.icon,item.expense,item.categoryID)} style={{width:200,height:50,backgroundColor:'grey',alignItems:'center',    justifyContent:'center'}}>
          <Text style={styles.textItem}>{item.name}</Text>
        </TouchableOpacity>
      </View>
      )
    }
    return (
      <View>
        <FlatList
          data={category}
          keyExtractor={item => item.categoryID}
          renderItem={renderItem}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>

      {/* Modals */}
      {modalVisible ? showModal() : null}
      {editModalVisible ? showEditModal() : null}
      {categoryModalVisible ? addCategoryModal() : null}
      {/* Modals */}

      <Button
        title='Add Category'
        onPress={handleModal}
      />

      <Text style={{alignSelf: 'center', fontSize: 20, margin: 10}}>
          Category
      </Text>

      {renderCategoryNames()}

      {/* <Button title="Open Category Modal" onPress={handleModal} /> */}

      <Button
        title="delte all Category"
        onPress={() => {
          deleteAllCategory();
          setCategory(getAllCategory);
          setCategoryId(0);
          setExpenseId(0);
        }}
      />

      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <Text style={{alignSelf: 'center', fontSize: 20, margin: 10}}>
            Expense
        </Text>
        <Button title='Add Expense' onPress={handleCategoryModal}/>
      </View>

      <FlatList
        data={category}
        keyExtractor={item => item.categoryID}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  itemViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  input: {
    height: 40,
    padding: 10,
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
  },
  textItem:{
    color:'white'
  }
});

export default Test1;
