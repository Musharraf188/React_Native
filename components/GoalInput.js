import { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

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
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHander} value={enteredGoalInput} />
            <Button title="Add Goal" onPress={addGoalHander} />
        </View>
    )
}

export default GaolInput;


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
      },
})