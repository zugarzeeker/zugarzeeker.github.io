import React from 'react'
import JsonField from './JsonField'
import _ from 'lodash'
import cn from 'classnames'

const data = [
  { Name: 'Supanut Apikulvanich' },
  { Nickname: 'Nut' },
  { Codename: 'ZugarZeeker' },
  { Job: 'Fullstack-Developer' },
  { Studies: 'Computer Engineer, Kasetsart University' },
  { Past: 'Satit Ayutthaya' },
  { Now: 'Intern @runnables.co.th' },
  { Hobbies: ['Tennis', 'Thai Checker', 'Manga', 'Music'] },
]

const contacts = [
  { path: 'facebook', link: 'https://www.facebook.com/supanut.apikulvanich' },
  { path: 'github', link: 'https://www.github.com/zugarzeeker' },
  { path: 'medium', link: 'https://www.medium.com/@zugarzeeker'},
  { path: 'gmail', link: '', disable: true  },
  { path: 'line', link: '', disable: true  },
  { path: 'twitter', link: '', disable: true  },
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
        <div className="field">{'"FindMe": '}
          {
            _.map(contacts, ({ path, link, disable }) => (
              <a href={link} className={cn({ disable })}>
                <img className={cn('icon-contact')}
                  src={require(`./icons/${path}.svg`)}
                />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  </div>
)

export default ProfileInformation
