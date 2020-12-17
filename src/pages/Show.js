import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Show extends Component {
  delete = () => {
    fetch(`http://localhost:3001/bounties/${this.props.bounty._id}`, { method: 'DELETE' })
    .then((res) => {
      this.props.reload()
      this.props.history.push('/')
    })
  }
  
  render() {
    if (!this.props.bounty) {
      return (
        <h1>Loading...</h1>
      )
    }
    
    return (
      <div>
        <h2>{this.props.bounty.name}</h2>
        <p>Wanted for: {this.props.bounty.wantedFor}</p>
        <p>Client: {this.props.bounty.client}</p>
        <p>Last seen: {this.props.bounty.lastSeen}</p>
        <p>Reward: {this.props.bounty.reward}</p>

        <Link to={`/edit/${this.props.bounty._id}`}><button>Edit</button></Link>
        <button onClick={this.delete}>Delete</button>
      </div>
    )
  }
}

export default withRouter(Show)