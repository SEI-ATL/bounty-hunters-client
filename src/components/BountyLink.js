import { Link } from 'react-router-dom'

function BountyLink(props) {
  const linkTo = `/show/${props.bountyId}`
  
  return(
    <div>
      <Link to={linkTo}>
        {props.name}
      </Link>
    </div>
  )
}

export default BountyLink