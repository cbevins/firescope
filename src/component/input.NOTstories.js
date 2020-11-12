// import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import { _input, _output } from '../model/store.js'
import InputPanel from './app/InputPanel.svelte'

export default {
  title: 'Firescope/Input',
  decorators: [withKnobs],
  Component: InputPanel
}

export const inputPanel = () => ({
  Component: InputPanel,
  props: { _input: _input, _output: _output }
})
