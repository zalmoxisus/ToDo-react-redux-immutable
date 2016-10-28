import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import App from './components/App';
import rootReducer from './reducers';
import 'styles/app.scss';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
  deserializeState: (state) => ({
    todos: {
      ...state.todos,
      todoList: fromJS(state.todos.todoList),
    },
  }),
}));

window.store = store;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('todo')
);
