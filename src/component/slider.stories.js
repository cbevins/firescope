// import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'

import AirTemperature from './slider/AirTemperature.svelte'
import DeadFuelMoisture from './slider/DeadFuelMoisture.svelte'
import ElapsedTime from './slider/ElapsedTime.svelte'
import LiveFuelMoisture from './slider/LiveFuelMoisture.svelte'
import SlopeAspect from './slider/SlopeAspect.svelte'
import Vertical from './slider/Vertical.svelte'
import WindSpeedDirection from './slider/WindSpeedDirection.svelte'

export default {
  title: 'Firescope/Slider',
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

export const airTemperature = () => ({
  Component: AirTemperature,
  props: { f: object('f', 75) }
})

export const deadFuelMoisture = () => ({
  Component: DeadFuelMoisture,
  props: {
    tl1h: object('tl1h', 0.05),
    tl10h: object('tl1h', 0.07),
    tl100h: object('tl1h', 0.09)
  }
})

export const elapsedTime = () => ({
  Component: ElapsedTime,
  props: { minutes: object('minutes', 60) }
})

export const liveFuelMoisture = () => ({
  Component: LiveFuelMoisture,
  props: {
    herb: object('herb', 0.5),
    stem: object('stem', 0.5)
  }
})

export const slopeAspect = () => ({
  Component: SlopeAspect,
  props: {
    aspect: object('aspect', 225),
    steepness: object('steepness', 1)
  }
})

export const windSpeedDirection = () => ({
  Component: WindSpeedDirection,
  props: {
    speed: object('speed', 880),
    direction: object('direction', 270)
  }
})
