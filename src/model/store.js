/* eslint-disable camelcase */
/**
 * The FireScope behaveplus-radical svelte data store
 */
import { derived, writable } from 'svelte/store'
import { Firescope } from './Firescope.js'

export const firescope = new Firescope()
export const _input = writable(firescope.input)
export const _output = derived(_input, $_input => {
  const output = firescope.runSingle($_input)
  return { ...output }
})
