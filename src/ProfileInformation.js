import React from 'react'
import JsonField from './JsonField'
import _ from 'lodash'
import cn from 'classnames'
import CodeBlock from './CodeBlock'

const data = [
  { Name: 'Supanut Apikulvanich' },
  { Nickname: 'Nut' },
  { Codename: 'ZugarZeeker' },
  { Job: 'Fullstack-Developer' },
  // { Studies: 'Computer Engineer, Kasetsart University' },
  { Studies: 'Computer Engineer, KU' },
  { Past: 'Satit Ayutthaya' },
  { Now: 'Software Engineer @taskworld.com' }
]

const contacts = [
  { path: 'facebook', link: 'https://www.facebook.com/supanut.apikulvanich' },
  { path: 'github', link: 'https://www.github.com/zugarzeeker' },
  { path: 'medium', link: 'https://www.medium.com/@zugarzeeker' },
  { path: 'gmail', link: '', disable: true },
  { path: 'line', link: '', disable: true },
  { path: 'twitter', link: '', disable: true }
]

const contactLinks = (
  <CodeBlock start="[" end="]" className="array">
    {
      _.map(contacts, ({ path, link, disable }, index) => (
        <span>
          <a href={link} className={cn({ disable })}>
            <img className={cn('icon-contact')}
              src={require(`./icons/${path}.svg`)}
            />
          </a>
          {index !== contacts.length - 1 && <span className="comma">{','}</span>}
        </span>
      ))
    }
  </CodeBlock>
)

const hobbies = ['Tennis', 'Thai Checker', 'Manga', 'Music']
const hobbyComponents = (
  <CodeBlock start='[' end=']' className="array">
    <div className="hobbies">
      <CodeBlock start='"' end='"'>{'Tennis'}</CodeBlock>{', '}
      <CodeBlock start='"' end='"'>{'Thai Checker'}</CodeBlock>{', '}
      <CodeBlock start='"' end='"'>{'Manga'}</CodeBlock>{', '}
      <CodeBlock start='"' end='"'>{'Music'}</CodeBlock>{', '}
      <CodeBlock start='"' end='"'>{'Book'}</CodeBlock>
    </div>
  </CodeBlock>
)


const renderJson = () => (
  <div className="json">
    <div className="fields">
      {
        _.map(data, (field) => {
          const keyname = _.keys(field)[0]
          const value = field[keyname]
          return <JsonField keyname={keyname} value={value} isEnd={false} />
        })
      }
      <JsonField keyname={'Hobbies'} value={hobbyComponents} isEnd={false} />
      <JsonField keyname={'FindMe'} value={contactLinks} isEnd={true} />
    </div>
  </div>
)

const ProfileInformation = () => (
  <div className="col-md-6 col-sm-6 information">
    <div className="filename">
      {'// about-me.json'}
    </div>
    {renderJson()}
  </div>
)

export default ProfileInformation
