import React from 'react'
import _ from 'lodash'
import './JsonField.scss'

const JsonField = ({ field }) => {
  const key = _.keys(field)[0]
  const value = field[key]
  return <h4>{`"${key}": ${value}`}</h4>
}

export default JsonField
