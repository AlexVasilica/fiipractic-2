import React from 'react'

class Column extends React.Component {
  render() {
    const { inputValue, todos } = this.props
    return (
      <div style={{ display: 'flex', margin: 5, flexDirection: 'column' }}>
        <div>
          <input
            value={inputValue}
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
    )
  }
}

export default Column
