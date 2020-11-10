/**
 * Adapter between behaveplus-radical and Firescope
 */

// JEST-FIX Jest tests require a file to transform
import * as Dag from './behaveplus.esm.js'
// import * as Dag from '@cbevins/behaveplus-radical'

import * as Uom from '@cbevins/behaveplus-uom'
import { Config, Input, Output } from './Variables.js'

export class Firescope {
  constructor () {
    this.dag = new Dag.Bpx()

    this.input = { ...Input }
    this.input.dag = this.dag // included for easy access by components from the _input prop
    this.input.uomSlate = 'usc' // 'base', 'usc', 'uss', 'sim'
    this.input.behavior = 'spreadRate' // variable shown on fire ellipse
    // By using Object.keys(Input), we skip iterating over non-variable properties
    Object.keys(Input).forEach(key => {
      const item = this.input[key]
      item.node = this.dag.get(item.nodeKey) // store this variable's DAG Node reference
      this.setValues(item, item.value.base) // set all this variable's uom values
    })

    this.selected = []
    this.output = { ...Output }
    // By using Object.keys(Output), we skip iterating over non-variable properties
    Object.keys(Output).forEach(key => {
      const item = this.output[key]
      item.node = this.dag.get(item.nodeKey) // store this variable's DAG Node reference
      this.selected.push([item.node, true]) // Add all outputs to the dag selected array
    })
    this.dag.setConfigs(Config)
    this.runSingle()
  }

  runSingle (input = null) {
    if (input) {
      this.input = input
    }
    this.dag.setSelected(this.selected)

    // Build the Dag input array and submit for a run
    // Must ensure that all input controls have stored *base* values
    // in the item.value.base property
    const dagInput = []
    // By using Object.keys(Input), we skip iterating over non-variable properties
    Object.keys(Input).forEach(key => {
      const item = this.input[key]
      this.setValues(item, item.value.base)
      dagInput.push([item.node, [item.value.base]])
    })
    this.dag.runInputs(dagInput)

    // Retrieve selected Node values
    // By using Object.keys(Output), we skip iterating over non-variable properties
    Object.keys(Output).forEach(key => {
      const item = this.output[key]
      this.setValues(item, item.node.value)
    })

    // Return this.output so run() can be used inside the Svelte derived store
    return this.output
  }

  setValues (item, baseValue) {
    item.value.base = baseValue
    if (item.variant !== null) {
      const u = item.variant.units
      item.value.usc = Uom.convert(baseValue, u.base, u.usc)
      item.value.uss = Uom.convert(baseValue, u.base, u.uss)
      item.value.sim = Uom.convert(baseValue, u.base, u.sim)
    } else {
      item.value.usc = baseValue
      item.value.uss = baseValue
      item.value.sim = baseValue
    }
  }

  /**
   * Returns the *item*'s display value (and units-of-measure) for the *uomSlate*
   *
   * @param {ref} item Reference to this.input or this.output variable
   * @param {string} uomSlate One of null, 'base', 'usc', 'uss', or 'sim'.
   * If null, then this.input.uomSLate is applied.
   * @return {string} The *item*'s display value (and units-of-measure) for the *uomSlate*
   */
  displayString (item, uomSlate = null) {
    if (item.variant !== null) {
      const slate = !uomSlate ? this.input.uomSlate : uomSlate
      const decimals = item.variant.decimals[slate]
      const display = item.value[slate].toFixed(decimals)
      const units = item.variant.units[slate]
      return display + ' ' + units
    }
    return item.value.base
  }

  /**
   * Returns the *item*'s display units-of-measure for the *uomSlate*.
   *
   * @param {ref} item Reference to this.input or this.output variable
   * @param {string} uomSlate One of null, 'base', 'usc', 'uss', or 'sim'.
   * If null, then this.input.uomSLate is applied.
   * @return {string} The *item*'s units-of-measure for the *uomSlate*.
   */
  displayUnits (item, uomSlate = null) {
    if (item.variant !== null) {
      const slate = !uomSlate ? this.input.uomSlate : uomSlate
      return item.variant.units[slate]
    }
    return ''
  }

  /**
   * Returns the *item*'s display value for the *uomSlate*.
   *
   * @param {ref} item Reference to this.input or this.output variable.
   * @param {string} uomSlate One of null, 'base', 'usc', 'uss', or 'sim'.
   * If null, then this.input.uomSLate is applied.
   * @return {string} The *item*'s display value for the *uomSlate*.
   */
  displayValue (item, uomSlate = null) {
    if (item.variant !== null) {
      const slate = !uomSlate ? this.input.uomSlate : uomSlate
      const decimals = item.variant.decimals[slate]
      return item.value[slate].toFixed(decimals)
    }
    return item.value.base
  }
}

export const generateRange = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step))
