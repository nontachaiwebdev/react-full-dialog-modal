import React, { Component } from 'react'
import Modal from './modal'
class App extends Component {
  constructor(props){
    super(props)
    this.pressButton = this.pressButton.bind(this)
    this.state = {
      showModal : false
    }
  }
  pressButton(){
    this.setState({ showModal : true })
  }
  render() {
    const { showModal } = this.state
    return (
      <div>
        <p>start component</p>        
        <button onClick={ this.pressButton } >Show Dialog</button>
        <Modal showModal={ showModal } />
       </div>
    )
  }
}

export default App;
