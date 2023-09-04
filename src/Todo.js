import { Component } from "react";

export function Todo(props) {
  const { remove, todo } = props;

  return (
    <div className="todo">
      <p>{todo.text}</p>
      <button onClick={() => remove(todo)}>x</button>
    </div>
  );
}
