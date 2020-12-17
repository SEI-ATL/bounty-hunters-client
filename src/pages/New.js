import React, { Component } from 'react'

import Form from '../components/Form'

class New extends Component {  
  render() {
    return (
      <>
        <h2>Create a new bounty</h2>
        <Form reload={this.props.reload}/>
      </>
    ) 
  }
}

export default New