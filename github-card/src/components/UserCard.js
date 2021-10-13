import React from 'react'

const UserCard = (props) => {
  return (
    <div>
      <h1>This is information about {props.name}'s GitHub Account</h1>
      <div className="user-card">
        <img src={props.picture} alt="user"/>
        <h4>GitHub Handle: <a href={props.link}>{props.handle}</a></h4>
      </div>
    </div>
  )
}

export default UserCard