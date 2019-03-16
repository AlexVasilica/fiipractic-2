import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isVisible: false,
      inputValue: '',
      todos: ['First item'],
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      ...prevState,
      isVisible: !prevState.isVisible,
    }))
  }

  changeInput = e => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  addTodo = () => {
    this.setState({
      inputValue: '',
      todos: this.state.todos.concat(this.state.inputValue),
    })
  }

  render() {
    const { inputValue: altNume, todos } = this.state
    return (
      <div style={{ padding: 15, background: 'lightgray', display: 'flex' }}>
        <div style={{ display: 'flex', margin: 5, flexDirection: 'column' }}>
          <div>
            <input
              value={altNume}
              onChange={this.changeInput}
              placeholder="Add you todo!"
            />
            <button onClick={this.addTodo}>Add todo</button>
          </div>

          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'flex', margin: 5, flexDirection: 'column' }}>
          <div>
            <input
              value={altNume}
              onChange={this.changeInput}
              placeholder="Add you todo!"
            />
            <button onClick={this.addTodo}>Add todo</button>
          </div>

          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        </div>
        <div style={{ display: 'flex', margin: 5, flexDirection: 'column' }}>
          <div>
            <input
              value={altNume}
              onChange={this.changeInput}
              placeholder="Add you todo!"
            />
            <button onClick={this.addTodo}>Add todo</button>
          </div>

          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
