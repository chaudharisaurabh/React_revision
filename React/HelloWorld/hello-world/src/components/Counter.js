import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    

  render() {
    return (
        <div>4<div>
        count {this.state.count}
      </div>

      <button>Increment</button>

        </div>
      
    )
  }
}

export default Counter
