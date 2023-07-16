import React from 'react'
import './assets/scss/App.scss'
import { Card } from './components/UI/Card'

const users = [
  {
    name: 'Eddard Stark',
    userName: '@nedstark',
    isFollowing: true,
    initialFollowing: true,
    avatar: 'https://pbs.twimg.com/profile_images/618785310/paladin_x96.jpg'
  },
  {
    name: 'Robb Stark',
    userName: '@robbstark',
    isFollowing: true,
    initialFollowing: false,
    avatar: 'https://pbs.twimg.com/profile_images/618785310/paladin_x96.jpg'
  },
  {
    name: 'Sansa Stark',
    userName: '@sansastark',
    isFollowing: false,
    initialFollowing: false,
    avatar: 'https://pbs.twimg.com/profile_images/618785310/paladin_x96.jpg'
  },
  {
    name: 'Arya Stark',
    userName: '@aryastark',
    isFollowing: true,
    initialFollowing: true,
    avatar: 'https://pbs.twimg.com/profile_images/618785310/paladin_x96.jpg'
  },
  {
    name: 'Brandon Stark',
    userName: '@branstark',
    isFollowing: false,
    initialFollowing: false,
    avatar: 'https://pbs.twimg.com/profile_images/618785310/paladin_x96.jpg'
  },
  {
    name: 'Rickon Stark',
    userName: '@rickonstark',
    isFollowing: true,
    initialFollowing: true,
    avatar: 'https://pbs.twimg.com/profile_images/618785310/paladin_x96.jpg'
  }
]

export function App () {
  return (
    <div className="cards">
      {
        users.map((user, index) => {
          return (
            <Card
              key={index}
              name={user.name}
              userName={user.userName}
              isFollowing={user.isFollowing}
              initialFollowing={user.initialFollowing}
              avatar={user.avatar}
            />
          )
        })
      }
    </div>
  )
}
