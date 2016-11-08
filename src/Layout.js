import React from 'react'
import { Link } from 'legendary-pancake'

export default function Layout ({ children }) {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about/'>About</Link></li>
          <li><Link to='/contact/'>Contact</Link></li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}
