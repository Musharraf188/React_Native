import { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal, Image } from "react-native";

function GaolInput(props) {
    const [enteredGoalInput, setEnteredGoalInput] = useState();
    function  goalInputHander(enteredText){
        setEnteredGoalInput(enteredText);
      }
      function addGoalHander(){
        props.onAddGoal(enteredGoalInput);
        setEnteredGoalInput('');
          }
    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/goal.png')}/>
            <TextInput style={styles.textInput}
             placeholder="Your course goal!" 
             onChangeText={goalInputHander} 
             value={enteredGoalInput} />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHander} color="#5e0acc"/>
            </View>
            <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
            </View>
        </View>
        </View>
       
        </Modal>
    )
}

export default GaolInput;


const styles = StyleSheet.create({
    inputContainer: {
      padding:16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor:'#311b6b'
      },
      buttonContainer :{
        margin:16,
flexDirection:'row'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor:'#e4d0ff',
        color:'#120438',
        width: '100%',
       borderRadius:6,
        padding: 8
      },
      button:{
        marginHorizontal:8,
        width:100
      },
      image :{
width:100,
height:100,
margin:8
      }
})