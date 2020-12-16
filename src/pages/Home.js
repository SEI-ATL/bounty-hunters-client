import React, { Component } from 'react'

import BountyLink from '../components/BountyLink'

class Home extends Component {  
  render() {
    const bountyLinks = this.props.bounties.map((b) => {
      return <BountyLink name={b.name} bountyId={b._id} key={b._id} />
    })
    
    return (
      <div>
        <h2>Home page!</h2>
        {bountyLinks}
      </div>
    )
  }
}

export default Home