import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      num1: 0,
      num2: 0,
      num3: 0,
      total: 0
    }

    this.changeNum = this.changeNum.bind(this)
  }

  componentDidMount(){
    this.runTotal();
  }

  changeNum(e,valueToChange){
    this.setState(valueToChange)
    this.runTotal()
  }

  runTotal(){
    var sum = this.state.num1 + this.state.num2 + this.state.num3
    this.setState({
      total: sum
    })
  }



  render() {
    return (
      <div className="App">
        <h1 className="App-title">Grid</h1>
        <div className="App__grid">
          <div className="App__grid--item">
            <input type="number" defaultValue={this.state.num1} onChange={(e) => this.changeNum(e, {num1: parseInt(e.target.value, 10)})}/>
          </div>
          <div className="App__grid--item">
            <input type="number" value={this.state.num2} onChange={(e) => this.changeNum(e, {num2: parseInt(e.target.value, 10)})}/>
          </div>
          <div className="App__grid--item">
            <input type="number" value={this.state.num3} onChange={(e) => this.changeNum(e, {num3: parseInt(e.target.value, 10)})}/>
          </div>
          <div className="App__grid--item">
            <h2>Sum: {this.state.num1 + this.state.num2 + this.state.num3}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
