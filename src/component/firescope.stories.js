// import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'

import { _input, _output } from '../model/store.js'
import DeadFuelMoisture from './slider/DeadFuelMoisture.svelte'
import InputPanel from './input/Panel.svelte'
import Vertical from './slider/Vertical.svelte'

export default {
  title: 'Firescope/Sliders',
  decorators: [withKnobs],
  Component: Vertical
}

export const vertical = () => ({
  Component: Vertical,
  props: {
    label: object('label', 'Moist'),
    value: object('value', 57),
    units: object('units', '%'),
    min: object('min', 0),
    max: object('max', 100),
    step: object('step', 1)
  }
})

export const deadFuelMoisture = () => ({
  Component: DeadFuelMoisture,
  props: {
    tl1h: object('tl1h', '0.05'),
    tl10h: object('tl1h', '0.07'),
    tl100h: object('tl1h', '0.09')
  }
})

export const inputPanel = () => ({
  Component: InputPanel,
  props: { _input: _input, _output: _output }
})
