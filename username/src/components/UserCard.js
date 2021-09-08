import React from 'react'

const UserCard = (props) => {

  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <img src={props.picture} alt="user"/>
      <h4>GitHub Handle: <a href={props.link}>{props.handle}</a></h4>
    </div>
  )
}

export default UserCard