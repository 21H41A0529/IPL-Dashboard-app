// Write your code here

import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {latestMatchDetails} = details
  return (
    <div className="latestCon">
      <h1 className="text">Latest Matches</h1>
      <div className="detailsCon">
        <div className="countryDetails">
          <h1>{latestMatchDetails.competingTeam}</h1>
          <h3>{latestMatchDetails.date}</h3>
          <p>{latestMatchDetails.venue}</p>
          <p>{latestMatchDetails.result}</p>
        </div>
        <img
          src={latestMatchDetails.competingTeamLogo}
          alt={latestMatchDetails.competingTeam}
          className="logoOfTheTeam"
        />
        <div className="firstInnings">
          <h1 className="b">First Innings</h1>
          <p className="b">{latestMatchDetails.firstInnings}</p>
          <h1 className="b">Second Innings</h1>
          <p className="b">{latestMatchDetails.secondInnings}</p>
          <h1 className="b">Man of the match</h1>
          <p className="b">{latestMatchDetails.manOfTheMatch}</p>
          <h1 className="b">Umpires</h1>
          <p className="b">{latestMatchDetails.Umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
