import { getTodos as apiGetTodos, sendTodo as apiSendTodo } from "../api/todos";

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
