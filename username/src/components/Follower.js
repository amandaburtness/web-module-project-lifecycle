import React from 'react'

const Follower = (props) => {
  return (
    <div className="follower-card">
      <h4>GitHub Handle: <a href={props.follower.html_url}>{props.follower.login}</a></h4>
    </div>
  )
}

export default Follower