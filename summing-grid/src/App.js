import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      num1: 0,
      num2: 0,
      num3: 0,
      total: 0
    }

    this.changeNum = this.changeNum.bind(this)
    this.alterNum = this.alterNum.bind(this)
  }

  changeNum(e) {
    var val = parseInt(e.target.value,10) ? parseInt(e.target.value,10) : 0

    this.setState({
      [e.target.name]: val
    },() => this.runTotal())
  }

  runTotal() {
    var sum = this.state.num1 + this.state.num2 + this.state.num3
    var newSum = this.alterNum(sum)
    this.setState({
      total: newSum
    })
  }

  alterNum(num) {
    //Rounding number
    var newNum = parseFloat(num.toString().slice(0,4))/1000

    //Assigning letter
    let letter = ''
    let length = Math.round(100 * Math.log(num) / Math.log(10)) / 100;

    if (length > 3 && length < 6) {
      letter = 'K'
    } else if (length > 6 && length < 9) {
      letter = 'M'
    } else if (length > 9 && length < 12) {
      letter = 'B'
    } else if (length > 12 && length < 15) {
      letter = 'T'
    } else {
      letter = ''
    }

    var result = length > 3 ? newNum.toFixed(2) + letter : num

    return result;
  
  }




  render() {
    return (
      <div className="App">
        <h1 className="App-title">Grid</h1>
        <div className="App__grid">
          <div className="App__grid--item">
            <input name="num1" type="number" defaultValue={this.state.num1} onChange={(e) => this.changeNum(e)} />
          </div>
          <div className="App__grid--item">
            <input name="num2" type="number" value={this.state.num2} onChange={(e) => this.changeNum(e)} />
          </div>
          <div className="App__grid--item">
            <input name="num3" type="number" value={this.state.num3} onChange={(e) => this.changeNum(e)} />
          </div>
          <div className="App__grid--item">
            <h2>Sum: {this.state.total}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
