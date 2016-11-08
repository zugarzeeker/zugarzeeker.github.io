import React from 'react'
import Layout from './Layout'

export default {
  '/': (callback) => {
    callback(<Layout>Home page</Layout>)
  },
  '/about/': (callback) => {
    callback(<Layout>About</Layout>)
  },
  '/contact/': (callback) => {
    callback(<Layout>Contact</Layout>)
  },
  '/no-match/': (callback) => {
    callback(<Layout>404</Layout>)
  }
}
