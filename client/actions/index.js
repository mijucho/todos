import { getTodos as apiGetTodos, sendTodo as apiSendTodo } from "../api/todos";
import { getByPriority as apigetByPriority } from "../api/todos";
import { getByCategory as apigetByCategory } from "../api/todos";
import { getCompleted as apigetCompleted } from "../api/todos";

export function getTodos() {
  return dispatch => {
    return apiGetTodos().then(todos => {
      dispatch(saveTodos(todos));
    });
  };
}

export function saveTodos(todos) {
  return {
    type: "SAVE_TODOS",
    todos: todos
  };
}

export function sendTodo(list) {
  return dispatch => {
    return apiSendTodo(list).then(result => {
      dispatch(getTodos());
    });
  };
}

export function getByPriority() {
  return dispatch => {
    return apigetByPriority().then(todos => {
      dispatch(getByPriority(todos));
    });
  };
}

export function getByCategory() {
  return dispatch => {
    return apigetByCategory().then(todos => {
      dispatch(getByCategory(todos));
    });
  };
}

export function getByCompleted() {
  return dispatch => {
    return apigetByCompleted().then(todos => {
      dispatch(getByPCompleted(todos));
    });
  };
}
