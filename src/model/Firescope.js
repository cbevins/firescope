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
    Object.defineProperty(this.input, 'uomSlate', { enumerable: false, writable: true, value: 'usc' })
    Object.defineProperty(this.input, 'behavior', { enumerable: false, writable: true, value: 'spreadRate' })
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

    Object.defineProperty(this.input, 'graph', { enumerable: false, writable: true, value: {} })
    this.input.graph = {
      x: {
        key: 'windSpeedAtMidflame',
        item: null,
        values: { base: [], uss: [], usc: [], sim: [] }
      },
      y: {
        key: 'spreadRate',
        item: null,
        values: { base: [], uss: [], usc: [], sim: [] }
      }
    }
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

    this.runRange()

    // Return this.output so run() can be used inside the Svelte derived store
    return this.output
  }

  // Run range variable
  runRange () {
    const x = this.input.graph.x
    x.item = this.input[x.key]
    x.values.base = generateRange(x.item.range.min, x.item.range.max, x.item.range.step)
    const y = this.input.graph.y
    y.item = this.output[y.key]
    const xBase = x.item.value.base // save for later restore
    this.dag.setSelected([[y.item.node, true]])
    this.dag.runInputs([[x.item.node, x.values.base]])

    // Store the outputs
    y.values.base = [...this.dag.dna.results.map.get(y.item.node)]

    // Convert results to various units-of-measure
    y.values.usc = []
    y.values.uss = []
    y.values.sim = []
    let u = y.item.variant.units
    y.values.base.forEach(baseValue => {
      y.values.usc.push(Uom.convert(baseValue, u.base, u.usc))
      y.values.uss.push(Uom.convert(baseValue, u.base, u.uss))
      y.values.sim.push(Uom.convert(baseValue, u.base, u.sim))
    })
    x.values.usc = []
    x.values.uss = []
    x.values.sim = []
    u = x.item.variant.units
    x.values.base.forEach(baseValue => {
      x.values.usc.push(Uom.convert(baseValue, u.base, u.usc))
      x.values.uss.push(Uom.convert(baseValue, u.base, u.uss))
      x.values.sim.push(Uom.convert(baseValue, u.base, u.sim))
    })
    x.item.value.base = xBase
  }

  setValues (item, baseValue) {
    item.value.base = baseValue
    if (item.variant.type === 'Quantity') {
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
    if (item.variant.type === 'Quantity') {
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
    if (item.variant.type === 'Quantity') {
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
    if (item.variant.type === 'Quantity') {
      const slate = !uomSlate ? this.input.uomSlate : uomSlate
      const decimals = item.variant.decimals[slate]
      return item.value[slate].toFixed(decimals)
    }
    return item.value.base
  }
}

export const generateRange = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step))
