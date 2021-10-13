import './App.css';
import React from 'react'
import UserCard from './components/UserCard'
import axios from 'axios'
import FollowersClass from './components/FollowersClass';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/amandaburtness')
    .then(res => {
      console.log(res.data)
      this.setState({...this.state, user: res.data})
    })
    .catch(err => console.log(err))
  }

  
  render() {
    return (
      <div className="App">
        <h1></h1>
        <UserCard name={this.state.user.name} handle={this.state.user.login} picture={this.state.user.avatar_url} link={this.state.user.html_url} />
        <FollowersClass />
      </div>
    );
  }
}

export default App;
