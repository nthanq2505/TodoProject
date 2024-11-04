import axios from 'axios';
import { Task } from '../../redux/actions/task.actions';

export const fetchTaskAPI = async () => {
  try {
    const response = await axios.get('http://10.0.2.2:8080/todos');
    return response;
  } catch (error) {
    throw error;
  }
};

export const addTaskAPI = async (data: Task) => {
  try {
    console.log(data);
    const response = await axios.post('http://10.0.2.2:8080/todos', data);
    return response;
  } catch (error) {
    throw error;
  }
};
