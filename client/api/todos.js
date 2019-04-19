import request from "superagent";

export function getTodos() {
  return request.get("./api/v1/todos").then(res => res.body);
}

export function sendTodo(list) {
  return request
    .post("./api/v1/todos")
    .send(list)
    .then(res => res.body);
}

export function getByPriority() {
  return request.get("../api/v1/priority").then(res => res.boby);
}

export function getByCategory() {
  return request.get("../api/v1/category").then(res => res.boby);
}

export function getByCompletedy() {
  return request.get("../api/v1/completed").then(res => res.boby);
}
