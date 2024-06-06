// Write your code here

import './index.css'

const MatchCard = props => {
  const {r} = props
  return (
    <li className="list7">
      <img
        src={r.competingTeamLogo}
        alt={r.competingTeam}
        className="logoOfOpposite"
      />
      <p>{r.competingTeam}</p>
      <p>{r.result}</p>
      <p>{r.matchStatus}</p>
    </li>
  )
}
export default MatchCard
