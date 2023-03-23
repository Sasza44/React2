import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(){
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  // щоб виводилось тільки додатнє число
  decrement(){
    if(this.state.count > 0){
        this.setState(state => ({
        count: state.count - 1
      }));
    }
  }

  render(){
    return(
      <div className='wrap'>
        <div className="btn" onClick={this.increment}>+</div>
        <div className="display">{this.state.count}</div>
        <div className="btn" onClick={this.decrement}>-</div>
      </div>
    )
  }
}

export default App;