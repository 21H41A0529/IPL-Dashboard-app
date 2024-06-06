// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    isActive1: false,
    list1: {},
  }

  componentDidMount() {
    this.get1()
  }

  get1 = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response1 = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data2 = await response1.json()
    const filtered1 = {
      teamBannerUrl: data2.team_banner_url,
      latestMatchDetails: {
        umpires: data2.latest_match_details.umpires,
        result: data2.latest_match_details.result,
        manOfTheMatch: data2.latest_match_details.man_of_the_match,
        id: data2.latest_match_details.id,
        date: data2.latest_match_details.date,
        venue: data2.latest_match_details.venue,
        competingTeam: data2.latest_match_details.competing_team,
        competingTeamLogo: data2.latest_match_details.competing_team_logo,
        firstInnings: data2.latest_match_details.first_innings,
        secondInnings: data2.latest_match_details.second_innings,
        matchStatus: data2.latest_match_details.match_status,
      },

      recentMatches: data2.recent_matches.map(k => ({
        umpires: k.umpires,
        result: k.result,
        manOfTheMatch: k.man_of_the_match,
        id: k.id,
        date: k.date,
        venue: k.venue,
        competingTeam: k.competing_team,
        competingTeamLogo: k.competing_team_logo,
        firstInnings: k.first_innings,
        second_innings: k.second_innings,
        matchStatus: k.match_status,
      })),
    }
    this.setState({list1: filtered1, isActive1: true})
  }

  renderMatchItems = () => {
    const {list1} = this.state
    const {recentMatches} = list1
    return (
      <div className="mainCon">
        <img
          src={list1.teamBannerUrl}
          alt={list1.latestMatchDetails}
          className="imageOfTheTeam"
        />
        <LatestMatch details={list1} key={list1.latestMatchDetails.id} />
        <ul className="list5">
          {recentMatches.map(r => (
            <MatchCard key={r.id} r={r} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isActive1} = this.state
    console.log('hello1')
    return isActive1 ? (
      this.renderMatchItems()
    ) : (
      <div className="loaderStyle" data-testid="loader">
        <Loader type="Oval" color="blue" height={50} width={50} />
      </div>
    )
  }
}
export default TeamMatches
