import React from 'react'
import Profile from './Profile'

export default {
  '/': (callback) => {
    callback(<Profile />)
  },
  '/no-match/': (callback) => {
    callback(<h1>404</h1>)
  }
}
