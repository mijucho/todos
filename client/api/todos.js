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
