// Write your code here

import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    isActive: false,
    list: [],
  }

  componentDidMount() {
    this.getIplDetails()
  }

  getIplDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data1 = await response.json()

    const {teams} = data1

    const filtered = teams.map(i => ({
      name: i.name,
      id: i.id,
      teamImageUrl: i.team_image_url,
    }))
    this.setState({list: filtered, isActive: true})
  }

  renderMatch = () => {
    const {list} = this.state
    return (
      <div className="outerCon">
        <div className="logoCon">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <div className="teamsCon">
          <ul className="listCon">
            {list.map(j => (
              <TeamCard key={j.id} j={j} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  loader = () => (
    <div className="loaderStyle" data-testid="loader">
      <Loader type="Oval" color="blue" height={50} width={50} />
    </div>
  )

  render() {
    const {isActive} = this.state
    return <>{isActive ? this.renderMatch() : this.loader()}</>
  }
}

export default Home
