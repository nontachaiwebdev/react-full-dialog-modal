import React, { Component } from 'react'
import Modal from './modal'
class App extends Component {
  constructor(props){
    super(props)
    this.pressButton = this.pressButton.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.state = {
      showModal : false
    }
  }
  pressButton(){
    this.setState({ showModal : true })
  }
  closeModal(){
    this.setState({ showModal : false })
  }
  render() {
    const { showModal } = this.state
    return (
      <div>
        <p>start component</p>        
        <button onClick={ this.pressButton } >Show Dialog</button>
        <Modal showModal={ showModal } >
	  <p>This is Modal</p>
	  <button onClick={ this.closeModal } >Close Dialog</button>
	</Modal>
       </div>
    )
  }
}

export default App;
