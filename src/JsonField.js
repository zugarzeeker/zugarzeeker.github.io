import React from 'react'
import _ from 'lodash'
import './JsonField.scss'
import CodeBlock from './CodeBlock'

const renderValue = (value) => (
  _.isString(value) ? (
    <CodeBlock className="json-value-string" start={'"'} end={'"'}>
      {value}
    </CodeBlock>
  ) : value
)

const JsonField = ({ keyname, value, isEnd }) => {
  return (
    <div className="field">
      <CodeBlock className="keyname" start={'"'} end={'"'}>
        {keyname}
      </CodeBlock>
      <span className="colon">{': '}</span>
      {renderValue(value)}
      {!isEnd && <span>{','}</span>}
    </div>
  )
}

export default JsonField
