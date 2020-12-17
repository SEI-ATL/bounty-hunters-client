import React, { Component } from 'react'

import Form from '../components/Form'

class Edit extends Component {
  render() {
    return (
      <>
      <h2>Editing {this.props.bounty.name}</h2>
        <Form
          reload={this.props.reload}
          bounty={this.props.bounty}
        />
      </>
    )
  }
}

export default Edit