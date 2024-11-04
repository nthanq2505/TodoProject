import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';

const Task = props => {
  const {task} = props;

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text>{task.taskName}</Text>
        {/* <Button
          title="Edit"
          color={task.isDone ? 'gray' : 'teal'}
          disabled={task.isDone}
          onPress={() => {}}
        /> */}
        {/* <Button
          title="Delete"
          color={task.isDone ? 'gray' : 'red'}
          disabled={task.isDone}
          onPress={() => {}}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F9FAFB',
    padding: 24,
    alignItems: 'center',
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
  },
  text: {
    fontSize: 16,
  },
  doneText: {
    fontSize: 16,
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
  },
});

export default Task;
