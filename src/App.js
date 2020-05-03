import React from 'react';
import './App.css';
import MyForm from './componets/MyForm'
import ToDoList from './componets/ToDoList'
import ListReducers from './reducers/ListReducers'
import InputReducer from './reducers/inputReducer'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import MyModal from './componets/MyModal';

const allReducers = combineReducers({list: ListReducers, myInput: InputReducer})
const myStore = createStore(allReducers)

function App() {
  return (
    <Provider store={myStore}>
        <MyModal><MyForm></MyForm></MyModal>
          <ToDoList></ToDoList>
    </Provider>
  );
}

export default App;
