import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GaolInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

  export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoal, setCourseGoal] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }
  function addGoalHander(enteredGoalInput) {
    setCourseGoal((CurrentGoal) => [...CurrentGoal,
    { text: enteredGoalInput, id: Math.random().toString() }

    ])
    endAddGoalHandler()
  }
  function deleteHandler(id) {
    setCourseGoal(currentGoalItem => {
      return currentGoalItem.filter((goal) => goal.id !== id);
    })
  }
  return (
    <>
      <StatusBar />
      <View style={styles.appContainer}>
        <Button title='Add Goal item' color="#a065ec" onPress={startAddGoalHandler} />
        {modalIsVisible && <GaolInput
          visible={modalIsVisible}
          onAddGoal={addGoalHander}
          onCancel={endAddGoalHandler}
        />

        }
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoal}
            renderItem={(itemData) => {
              return <GoalItem id={itemData.item.id} onDeleteItem={deleteHandler} text={itemData.item.text} />
            }} />
        </View>
      </View>
    </>
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
