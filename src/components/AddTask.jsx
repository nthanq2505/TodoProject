import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskRequest } from '../redux/actions/task.actions';

const AddTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.task);

  const handleAddTask = () => {
    dispatch(addTaskRequest({ taskName: task, isDone: false }));
    setTask('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          value={task}
          onChangeText={setTask}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={loading ? 'Adding...' : 'Add new'}
          onPress={handleAddTask}
          disabled={loading}
        />
        <Button
          title="Cancel"
          color="red"
          onPress={() => setTask('')}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 16,
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#D1D5DB',
    paddingVertical: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  errorText: {
    color: 'red',
  },
});

export default AddTask;