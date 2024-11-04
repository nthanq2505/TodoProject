/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import TaskManager from './src/components/TaskManager';
// TODO: Fetch data from API localhost:8080/todos
// TODO: Display data in UI
//
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <TaskManager />
    </Provider>
  );
}

export default App;
