import React, { Component } from 'react';
import './modal.css'
class Modal extends Component {
  render() {
    const { showModal, children } = this.props
    const showCss = showModal ? { 'top' : '0%' } : { 'top':'100%' }
    return (
      <div className={`modalwindow`} style={showCss} >
        { children }  
      </div>
    )
  }
}

export default Modal;
