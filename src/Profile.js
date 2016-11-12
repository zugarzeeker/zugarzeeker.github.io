import React from 'react'
import { Link } from 'legendary-pancake'
import './Profile.scss'
import 'bootstrap/dist/css/bootstrap.css'
import cn from 'classnames'

export default function Profile ({ children }) {
  return (
    <div className="layout">
      <div className="container">
        <div className="row row-fluid row-eq-height">
          <div className="col-md-6 col-sm-6 information">
            <div className="filename">
              {'// about-me.json'}
            </div>
            <div className="json">
              <div className="fields">
                <h4>Name: Supanut Apikulvanich</h4>
                <h4>Nickname: Nut</h4>
                <h4>Codename: ZugarZeeker</h4>
                <h4>Job: Fullstack-Developer</h4>
                <h4>Studies: Computer Engineer, Kasetsart University</h4>
                <h4>Past: Satit Ayutthaya</h4>
                <h4>Now: Intern @runnables.co.th</h4>
                <h4>Hobbies: [
                  Tennis, Thai Checker, Manga, Music
                ]</h4>
                <h4>FindMe: [
                  Facebook, Email, Twitter, Medium, Line, Github
                ]</h4>
              </div>
            </div>
          </div>
          {/*<div className="col-md-6 col-sm-6 picture">
            <img className={cn('img-responsive')} src={require('./profile.jpg')} />
          </div>*/}
          <div className="col-md-6 col-sm-6 picture">
            <img className={cn('img-responsive')} src={require('./profile.jpg')} />
          </div>
        </div>
      </div>
    </div>
  )
}
