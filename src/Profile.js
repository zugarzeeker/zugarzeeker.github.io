import React from 'react'
import { Link } from 'legendary-pancake'
import './Profile.scss'
import 'bootstrap/dist/css/bootstrap.css'
import cn from 'classnames'
import ProfilePicture from './ProfilePicture'
import ProfileInformation from './ProfileInformation'

export default function Profile ({ children }) {
  return (
    <div className="layout">
      <div className="container">
        <div className="row row-fluid row-eq-height">
          <ProfileInformation />
          <ProfilePicture />
        </div>
      </div>
    </div>
  )
}
