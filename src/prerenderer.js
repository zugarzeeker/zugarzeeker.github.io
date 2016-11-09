import ReactDOMServer from 'react-dom/server'
import { createPrerenderer } from 'legendary-pancake/prerenderer'

import pages from './pages'

export const prerenderer = createPrerenderer(pages, {
  renderPage (content, { stylesheets, javascripts }) {
    const contentHtml = ReactDOMServer.renderToString(content)
    return (`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My website</title>
        ${stylesheets}
      </head>
      <body>
        <div id="app">${contentHtml}</div>
        ${javascripts}
      </body>
      </html>
    `)
  }
})
