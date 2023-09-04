import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { handleAdd } = this.props;

    return (
      <div className="form">
        <input
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="What whould you like to write?"
          required
        />
        <button
          onClick={() => {
            handleAdd(this.state);
            this.setState({
              text: " ",
            });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}
