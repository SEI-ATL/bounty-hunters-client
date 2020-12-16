import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import FormField from '../components/FormField'

class New extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      wantedFor: '',
      client: '',
      reward: '',
    }
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitForm = () => {
    fetch('http://localhost:3001/bounties', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((res) => {
      res.json().then((json) => {
        this.props.reload()
        this.props.history.push(`/show/${json.bounty._id}`)
      })
    })
  }
  
  render() {
    return (
      <div>
        <h2>Create a new bounty</h2>
        
        <FormField labelLink='name' displayLabel='Name' value={this.state.name} handler={this.handleInput} />

        <FormField labelLink='wantedFor' displayLabel='Wanted For' value={this.state.wantedFor} handler={this.handleInput} />

        <FormField labelLink='client' displayLabel='Client' value={this.state.client} handler={this.handleInput} />

        <FormField labelLink='reward' displayLabel='Reward' value={this.state.reward} handler={this.handleInput} />

        <input type="submit" onClick={this.submitForm} value='Create!' />
      </div>
    )
  }
}

export default withRouter(New)