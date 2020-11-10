import { Firescope, generateRange } from './Firescope.js'

test('1: new Firescope()', () => {
  const model = new Firescope()
  expect(model.input.fuelMoistureDead1.nodeKey).toEqual('site.moisture.dead.tl1h')
  expect(model.input.fuelMoistureDead1.value.base).toEqual(0.05)
  expect(model.input.fuelMoistureDead1.value.usc).toEqual(5)
  expect(model.input.fuelMoistureDead1.value.uss).toEqual(5)
  expect(model.input.fuelMoistureDead1.value.sim).toEqual(5)
})

test('2: Firescope variable values', () => {
  const model = new Firescope()
  const ros = 198.4626874702091
  expect(model.output.spreadRate.nodeKey).toEqual('surface.weighted.fire.spreadRate')
  expect(model.output.spreadRate.value.base).toBeCloseTo(ros, 6)
  expect(model.output.spreadRate.value.usc).toBeCloseTo(ros, 6)
  expect(model.output.spreadRate.value.uss).toBeCloseTo(ros / 1.1, 6)
  expect(model.output.spreadRate.value.sim).toBeCloseTo(ros / 3.28084, 5)
})

test('3: Firescope units-of-measure', () => {
  const model = new Firescope()
  // const ros = 198.4626874702091
  expect(model.input.uomSlate).toEqual('usc')
  expect(model.displayValue(model.output.spreadRate)).toEqual('198.46')
  expect(model.displayString(model.output.spreadRate)).toEqual('198.46 ft/min')
  expect(model.displayUnits(model.output.spreadRate)).toEqual('ft/min')

  expect(model.displayValue(model.output.spreadRate, 'usc')).toEqual('198.46')
  expect(model.displayString(model.output.spreadRate, 'usc')).toEqual('198.46 ft/min')
  expect(model.displayUnits(model.output.spreadRate, 'usc')).toEqual('ft/min')

  expect(model.displayValue(model.output.spreadRate, 'base')).toEqual('198.46')
  expect(model.displayString(model.output.spreadRate, 'base')).toEqual('198.46 ft/min')
  expect(model.displayUnits(model.output.spreadRate, 'base')).toEqual('ft/min')

  expect(model.displayValue(model.output.spreadRate, 'uss')).toEqual('180.42')
  expect(model.displayString(model.output.spreadRate, 'uss')).toEqual('180.42 ch/h')
  expect(model.displayUnits(model.output.spreadRate, 'uss')).toEqual('ch/h')

  expect(model.displayValue(model.output.spreadRate, 'sim')).toEqual('60.49')
  expect(model.displayString(model.output.spreadRate, 'sim')).toEqual('60.49 m/min')
  expect(model.displayUnits(model.output.spreadRate, 'sim')).toEqual('m/min')

  expect(model.displayValue(model.input.fuelModelCatalogKey)).toEqual('124')
  expect(model.displayString(model.input.fuelModelCatalogKey)).toEqual('124')
  expect(model.displayUnits(model.input.fuelModelCatalogKey)).toEqual('')

  expect(model.displayValue(model.input.fuelModelCatalogKey, 'sim')).toEqual('124')
  expect(model.displayString(model.input.fuelModelCatalogKey, 'sim')).toEqual('124')
  expect(model.displayUnits(model.input.fuelModelCatalogKey, 'sim')).toEqual('')
})

test('4: generateRange()', () => {
  expect(generateRange(0, 40, 10)).toEqual([0, 10, 20, 30, 40])
  expect(generateRange(0, 41, 10)).toEqual([0, 10, 20, 30, 40])
  expect(generateRange(40, 0, -10)).toEqual([40, 30, 20, 10, 0])
})
