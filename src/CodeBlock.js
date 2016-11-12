import React from 'react'

const CodeBlock = ({ start, end, className, children }) => (
  <span className={className}>
    <span className="start">{start}</span>
    <span className="content">{children}</span>
    <span className="end">{end}</span>
  </span>
)

export default CodeBlock
