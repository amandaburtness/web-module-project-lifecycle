import React from 'react'
import axios from 'axios'
import FollowerCard from './FollowerCard'

class FollowersClass extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/amandaburtness/followers`)
    .then(res => {
      this.setState({ ...this.state, followers: res.data })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h2>Followers: </h2>
        {this.state.followers.map(data => {
          return (
            <FollowerCard key={data.id} follower={data}/>
          )
        })}
      </div>
    )
  }
}

export default FollowersClass