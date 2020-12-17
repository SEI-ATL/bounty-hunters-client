import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import FormField from '../components/FormField'

class Form extends Component {
  constructor(props) {
    super(props)

    let initialState
    
    if (props.bounty) {
      initialState = {
        name: props.bounty.name,
        wantedFor: props.bounty.wantedFor,
        client: props.bounty.client,
        reward: props.bounty.reward,
      }
    } else {
      initialState = {
        name: '',
        wantedFor: '',
        client: '',
        reward: '',
      }
    }

    this.state = initialState
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitForm = () => {
    let url = 'http://localhost:3001/bounties/'
    let method = 'POST'

    if (this.props.bounty) {
      url += this.props.bounty._id
      method = 'PUT'
    }
    
    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((res) => {
      res.json().then((json) => {
        this.props.reload()

        if (this.props.bounty) {
          this.props.history.push(`/show/${this.props.bounty._id}`)
        } else {
          this.props.history.push(`/show/${json.bounty._id}`)
        }
      })
    })
  }
  
  render() {
    return (
      <div>
        <FormField labelLink='name' displayLabel='Name' value={this.state.name} handler={this.handleInput} />

        <FormField labelLink='wantedFor' displayLabel='Wanted For' value={this.state.wantedFor} handler={this.handleInput} />

        <FormField labelLink='client' displayLabel='Client' value={this.state.client} handler={this.handleInput} />

        <FormField labelLink='reward' displayLabel='Reward' value={this.state.reward} handler={this.handleInput} />

        <input type="submit" onClick={this.submitForm} value={this.props.bounty ?  'Edit!' : 'Create!'} />
      </div>
    )
  }
}

export default withRouter(Form)

