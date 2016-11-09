import { createRenderer } from 'legendary-pancake'
import pages from './pages'

const renderer = createRenderer(pages)
renderer.renderTo(document.getElementById('app'))

if (module.hot) {
  const onHotReload = renderer.createHotReloadHandler(() => require('./pages').default)
  module.hot.accept('./pages', onHotReload)
}
