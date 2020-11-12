// import App from './starter/App.svelte'
import App from './component/app/App.svelte'
import { _input, _output } from './model/store.js'

const app = new App({
  target: document.body,
  props: {
    _input: _input,
    _output: _output
  }
})

export default app
