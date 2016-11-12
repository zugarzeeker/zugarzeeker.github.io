import React from 'react'
import cn from 'classnames'

const ProfilePicture = () => (
  <div className="col-md-6 col-sm-6 picture">
    <img className={cn('img-responsive')} src={require('./profile.jpg')} />
  </div>
)

export default ProfilePicture
