// import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'

import { _input, _output } from '../model/store.js'
import Panel from './input/Panel.svelte'

export default {
  title: 'Firescope/Input',
  decorators: [withKnobs],
  Component: Panel
}

export const panel = () => ({
  Component: Panel,
  props: { _input: _input, _output: _output }
})
