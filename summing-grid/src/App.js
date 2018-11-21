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

  componentDidMount() {
    this.runTotal();
  }

  changeNum(e, valueToChange) {
    this.setState(valueToChange, () => this.runTotal())
  }

  runTotal() {
    var sum = this.state.num1 + this.state.num2 + this.state.num3
    var newSum = this.alterNum(sum)
    this.setState({
      total: newSum
    })
  }

  alterNum(num) {
    var newNum;
    //LOGIC FOR LETTER
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

    //LOGIC FOR ROUNDING
    if(num >= 1000) {
      newNum = parseFloat(num.toString().slice(0,4))/1000
      return newNum.toFixed(2) + letter

    } else {
      return num
    }
  
  }




  render() {
    return (
      <div className="App">
        <h1 className="App-title">Grid</h1>
        <div className="App__grid">
          <div className="App__grid--item">
            <input type="number" defaultValue={this.state.num1} onChange={(e) => this.changeNum(e, { num1: parseInt(e.target.value, 10) })} />
          </div>
          <div className="App__grid--item">
            <input type="number" value={this.state.num2} onChange={(e) => this.changeNum(e, { num2: parseInt(e.target.value, 10) })} />
          </div>
          <div className="App__grid--item">
            <input type="number" value={this.state.num3} onChange={(e) => this.changeNum(e, { num3: parseInt(e.target.value, 10) })} />
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
