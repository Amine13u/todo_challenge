import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [
      { text: "Learn React", id: 1, isDone: false },
      { text: "Learn Redux", id: 2, isDone: false }
    ],
    newInput: ""
  };

  addTodo = (text) => {
    if (this.state.newInput.trim() === "") {
      alert("Invalid Input");
    } else {
      this.setState({
        todos: [
          ...this.state.todos,
          { text, id: this.state.todos.length + 1, isDone: false }
        ]
      });
      this.setState({ newInput: "" });
    }
  };

  removeTodo = (id) =>
    this.setState({ todos: this.state.todos.filter((el) => el.id !== id) });

  completedTodo = (id) =>
    this.setState({
      todos: this.state.todos.map((el) =>
        el.id === id ? { ...el, isDone: !el.isDone } : el
      )
    });

  handleChange = (e) => this.setState({ newInput: e.target.value });

  render() {
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <div className="Add-section">
          <input
            type="text"
            placeholder="Add task ..."
            value={this.state.newInput}
            onChange={(e) => this.handleChange(e)}
          />
          <button
            onClick={() => {
              this.addTodo(this.state.newInput);
            }}
          >
            Add
          </button>
        </div>
        {this.state.todos.map((el, i) => {
          return (
            <div key={i} className="todo-item">
              <p className={el.isDone ? "Done" : ""}>{el.text}</p>
              <div className="buttons">
                <button
                  onClick={() => {
                    this.completedTodo(el.id);
                  }}
                >
                  {el.isDone ? "Undo" : "Done"}
                </button>
                <button
                  onClick={() => {
                    this.removeTodo(el.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
