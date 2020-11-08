import App from './starter/App.svelte'

const app = new App({
  target: document.body,
  props: {
    name: 'Collin'
  }
})

export default app
