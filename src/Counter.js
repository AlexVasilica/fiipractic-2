import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    console.log('Din ctor ***')
    this.state = {
      counter: 0,
    }
  }

  componentDidMount() {
    console.log('component did mount')
  }

  componentWillUnmount() {
    console.log('aici e partea de cleanup')
  }


  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1,
    })
  }

  render() {
    return (
      <div>
        i am your counter!
        <p>The counter is: {this.state.counter}</p>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>
      </div>
    )
  }
}

export default Counter
