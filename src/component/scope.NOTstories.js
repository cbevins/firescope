import { withKnobs, object } from '@storybook/addon-knobs'
import Bubble from './scope/Bubble.svelte'
import FireScope from './scope/Scope.svelte'

// Get model store shared by this app's components
import { _input, _output } from '../model/store.js'

export default {
  title: 'Firescope/Scope',
  decorators: [withKnobs],
  Component: Bubble
}

export const bubble = () => ({
  Component: Bubble,
  props: {
    width: object('width', 100),
    height: object('height', 100),
    color: object('color', 'blue')
  }
})

export const fireScope = () => ({
  Component: FireScope,
  props: {
    _input: _input,
    _output: _output,
    width: object('width', 100),
    height: object('height', 100)
  }
})
