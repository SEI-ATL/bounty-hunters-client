import { NavLink } from 'react-router-dom'

function StyledNavLink(props) {
  return (
    <li>
      <NavLink className='nav-link' to={props.to}>{props.text}</NavLink>
    </li>
  )
}

export default StyledNavLink