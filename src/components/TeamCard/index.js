// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {j} = props
  const {id} = j
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="listItem">
        <img src={j.teamImageUrl} alt={j.name} className="teamImage" />
        <p className="heading">{j.name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
