// import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import { _input, _output } from '../model/store.js'
// import FireTable from './table/FireTable.svelte'
// import Reels from './reels/Reels.svelte'
import Main from './app/Main.svelte'
// import TabApp from './tabs/TabApp.svelte'

export default {
  title: 'Firescope/App',
  decorators: [withKnobs],
  Component: Main
}

export const main = () => ({
  Component: Main,
  props: { _input: _input, _output: _output }
})

// export const fireTable = () => ({
//   Component: FireTable,
//   props: { _input: _input, _output: _output }
// })

// export const reels = () => ({
//   Component: Reels,
//   props: { _input: _input, _output: _output }
// })

// export const tabs = () => ({
//   Component: TabApp,
//   props: { _input: _input, _output: _output }
// })
