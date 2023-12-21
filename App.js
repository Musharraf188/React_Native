import { useState } from 'react';
import { StyleSheet,  View, Button, TextInput,  FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GaolInput from './components/GoalInput';

export default function App() {
 
  const [courseGoal, setCourseGoal] = useState([]);
  
  function  addGoalHander(enteredGoalInput){
setCourseGoal((CurrentGoal)=> [...CurrentGoal, 
{text : enteredGoalInput, id: Math.random().toString()}
])
  }
  function deleteHandler (id){
    setCourseGoal(currentGoalItem=>{
      return currentGoalItem.filter((goal)=>goal.id!== id);
    })
  }
  return (
    <View style={styles.appContainer}>
     <GaolInput onAddGoal={addGoalHander}/>
      <View style={styles.goalsContainer}>
        <FlatList 
        data={courseGoal} 
        renderItem={(itemData)=> {
        return  <GoalItem id={itemData.item.id} onDeleteItem={deleteHandler} text={itemData.item.text}/>
        }} />
       
       
     
        
     
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },

  goalsContainer: {
    flex: 5
  },
 
 
});
