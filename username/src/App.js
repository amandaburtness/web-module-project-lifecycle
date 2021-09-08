import React from 'react'
import './App.css';
import UserCard from './components/UserCard'
import FollowerCard from './components/FollowerCard'
import axios from 'axios'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/amandaburtness`)
    .then(res => {
      console.log(res)
      this.setState({
      ...this.state,
      user: res.data
    })})
    .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className="App">
        <h1>GitHub Information:</h1>
        <UserCard name={this.state.user.name} handle={this.state.user.login} picture={this.state.user.avatar_url} link={this.state.user.html_url}/>
        <h2>This users follower information: </h2>
        <FollowerCard />
      </div>
    );
  }
}

export default App;
