import { NavLink } from 'react-router-dom'

import StyledNavLink from './StyledNavLink'

function Nav() {
  return (
    <nav>
      <ul className='nav-list'>
        <StyledNavLink to='/' text='Home' />
        <StyledNavLink to='/new' text='Create' />
      </ul>
    </nav>
  )
}

export default Nav