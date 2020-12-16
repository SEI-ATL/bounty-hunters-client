import React, { Component } from 'react'

import BountyLink from '../components/BountyLink'

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home page!</h2>
        <BountyLink name={'Yosemite Sam'} bountyId={'asdf1234'}/>
      </div>
    )
  }
}

export default Home