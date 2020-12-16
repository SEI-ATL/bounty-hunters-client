import React, { Component } from 'react'

class Show extends Component {
  render() {
    if (!this.props.bounty) {
      return (
        <h1>Loading...</h1>
      )
    }

    const huntersList = this.props.bounty.hunters.map((h) => {
      return <li>Name: {h.name}, Origin: {h.origin}</li>
    })
    
    return (
      <div>
        <h2>{this.props.bounty.name}</h2>
        <p>Wanted for: {this.props.bounty.wantedFor}</p>
        <p>Client: {this.props.bounty.client}</p>
        <p>Last seen: {this.props.bounty.lastSeen}</p>
        <p>Reward: {this.props.bounty.reward}</p>

        <p>Hunters:</p>
        <ul>
          {huntersList}
        </ul>
      </div>
    )
  }
}

export default Show