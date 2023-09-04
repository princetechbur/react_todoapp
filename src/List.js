import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    return (
      <div className="list">
        {this.props.todos.map((todo, i) => (
          <Todo key={i} todo={todo} remove={this.props.handleRemove} />
        ))}
      </div>
    );
  }
}
