import React, { useEffect } from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import AddTask from './AddTask';
import Task from './Task';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTaskRequest} from '../redux/actions/task.actions';

const TaskManager = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector(state => state.task);

  useEffect(() => {
    dispatch(fetchTaskRequest());
  }, [dispatch]);

  if (loading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }
  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <AddTask />
      <View style={styles.divider} />
      {/* <Filter /> */}
      <ScrollView style={styles.taskList}>
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 8,
  },
  taskList: {
    flex: 1,
  },
});

export default TaskManager;
