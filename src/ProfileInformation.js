import React from 'react'
import JsonField from './JsonField'
import _ from 'lodash'

const data = [
  { Name: 'Supanut Apikulvanich' },
  { Nickname: 'Nut' },
  { Codename: 'ZugarZeeker' },
  { Job: 'Fullstack-Developer' },
  { Studies: 'Computer Engineer, Kasetsart University' },
  { Past: 'Satit Ayutthaya' },
  { Now: 'Intern @runnables.co.th' },
  { Hobbies: ['Tennis', 'Thai Checker', 'Manga', 'Music'] },
  { FindMe: ['FB', 'TW', 'ME', 'LI', 'GH'] },
]

const ProfileInformation = () => (
  <div className="col-md-6 col-sm-6 information">
    <div className="filename">
      {'// about-me.json'}
    </div>
    <div className="json">
      <div className="fields">
        {
          _.map(data, (field) => (
            <JsonField field={field} />
          ))
        }
      </div>
    </div>
  </div>
)

export default ProfileInformation
