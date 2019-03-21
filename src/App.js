import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content:'Complete your website'},
      {id: 2, content:'Play CSGO?'}
    ]
  }

  deleteTodo = (id) => {
    // console.log(id);
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id ? true : false;
    });
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos  deleteTodo={ this.deleteTodo } todos={this.state.todos} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
