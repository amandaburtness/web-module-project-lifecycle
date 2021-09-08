import axios from 'axios';
import React from 'react'
import Follower from './Follower';

class FollowerCard extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/amandaburtness/followers`)
    .then(res => {
      console.log(res)
      this.setState({
      ...this.state,
      followers: res.data
    })})
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="follower-card-wrapper">
        {this.state.followers.map(data => {
          return (
            <Follower key={data.id} follower={data}/>
          )
        })}
     </div>
    )
  }
}

export default FollowerCard