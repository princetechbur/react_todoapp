import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  // add constructor and state here
  constructor() {
    super();
    this.state = {
      todos: [
        { text: "Come here" },
        { text: "play the guitar" },
        { text: "And entertain us" },
      ],
    };
  }
  // create handleAdd and handleRemove functions here
  handleAdd = (data) => {
    let { todos } = this.state;
    todos.unshift(data);
    this.setState({
      todos,
    });
  };

  handleRemove = (data) => {
    let { todos } = this.state;

    todos = todos.filter((val) => data !== val);
    this.setState({
      todos,
    });
  };

  render() {

    let { todos } = this.state;
    return (
      <div className="App">
        <span>TodoList</span>
        <Form handleAdd={this.handleAdd} />
        <List todos={todos} handleRemove={this.handleRemove} />
      </div>
    );
  }
}
