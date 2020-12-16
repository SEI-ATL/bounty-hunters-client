import { Link } from 'react-router-dom'

function BountyLink(props) {
  const linkTo = `/show/${props.bountyId}`
  
  return(
    <Link to={linkTo}>
      {props.name}
    </Link>
  )
}

export default BountyLink