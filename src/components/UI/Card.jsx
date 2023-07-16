/* eslint-disable react/prop-types */
import { React, useState } from 'react'

export function Card ({ name, userName, isFollowing, initialFollowing, avatar }) {
  const [following, setFollowing] = useState(initialFollowing)
  const [unfollow, setUnFollow] = useState(false)

  const buttonText = following ? 'Following' : 'Follow'
  const buttonClassName = following ? 'isFollowing' : ''

  const handleClick = () => {
    setFollowing(!following)
  }
  const handleMouseOver = () => {
    if (following) {
      setUnFollow(true)
    }
  }
  const handleMouseOut = () => {
    if (following) {
      setUnFollow(false)
    }
  }

  return (
    <div className='card'>
      <div className='card__userdata'>
        <img src={ avatar } alt="{ userName }" />
        <div className='card__username'>
          <strong>{ name }</strong>
          <div className="card__username-data">
            <span>{ (userName) }</span>
            {isFollowing &&
              <span>Follows you</span>
            }
          </div>
        </div>
      </div>
      <div className='card__actions'>
        <button
          type='button'
          className={ buttonClassName }
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {!unfollow && (
            buttonText
          )}
          {unfollow && (
            'Unfollow'
          )}
        </button>
      </div>
    </div>
  )
}
