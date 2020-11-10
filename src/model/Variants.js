/**
 * Defines all the variants used by Firescope.
 * These shadow the behaveplus-radical Variants.
 */
// Variant units-of-measure
export const Units = {
  base: 'base', //  ft, lb, btu, min, ratio
  usc: 'US Customary', //  ft, lb, btu, min, percent
  uss: 'US Surveyor', //  ft, lb, btu, min, percent
  sim: 'SI (metric)' // m, kg, J, min, percent
}

export const Variant = {
  compassAzimuth: {
    units: { base: 'deg', usc: 'deg', uss: 'deg', sim: 'deg' },
    decimals: { base: 0, usc: 0, uss: 0, sim: 0 }
  },
  fireArea: {
    units: { base: 'ft2', usc: 'ac', uss: 'ac', sim: 'ha' },
    decimals: { base: 0, usc: 2, uss: 2, sim: 2 }
  },
  fireDistance: {
    units: { base: 'ft', usc: 'ft', uss: 'ch', sim: 'm' },
    decimals: { base: 0, usc: 2, uss: 2, sim: 0 }
  },
  fireHeatPerUnitArea: {
    units: { base: 'btu/ft2', usc: 'btu/ft2', uss: 'btu/ft2', sim: 'J/m2' },
    decimals: { base: 0, usc: 0, uss: 0, sim: 0 }
  },
  fireFirelineIntensity: {
    units: { base: 'btu/ft/s', usc: 'btu/ft/s', uss: 'btu/ft/s', sim: 'J/m/s' },
    decimals: { base: 0, usc: 0, uss: 0, sim: 0 }
  },
  fireFlameLength: {
    units: { base: 'ft', usc: 'ft', uss: 'ft', sim: 'm' },
    decimals: { base: 2, usc: 2, uss: 2, sim: 2 }
  },
  fireLengthToWidthRatio: {
    units: { base: 'ratio', usc: 'ratio', uss: 'ratio', sim: 'ratio' },
    decimals: { base: 2, usc: 2, uss: 2, sim: 2 }
  },
  fireReactionIntensity: {
    units: { base: 'btu/ft2/min', usc: 'btu/ft2/min', uss: 'btu/ft2/min', sim: 'J/m2/min' },
    decimals: { base: 0, usc: 0, uss: 0, sim: 0 }
  },
  fireScorchHt: {
    units: { base: 'ft', usc: 'ft', uss: 'ft', sim: 'm' },
    decimals: { base: 2, usc: 2, uss: 2, sim: 2 }
  },
  fireSpreadRate: {
    units: { base: 'ft/min', usc: 'ft/min', uss: 'ch/h', sim: 'm/min' },
    decimals: { base: 2, usc: 2, uss: 2, sim: 2 }
  },
  fireTime: {
    units: { base: 'min', usc: 'h', uss: 'h', sim: 'h' },
    decimals: { base: 0, usc: 2, uss: 2, sim: 2 }
  },
  fuelFraction: { // cured fraction, cover fraction
    units: { base: 'ratio', usc: '%', uss: '%', sim: '%' },
    decimals: { base: 2, usc: 0, uss: 0, sim: 0 }
  },
  fuelMoisture: {
    units: { base: 'ratio', usc: '%', uss: '%', sim: '%' },
    decimals: { base: 2, usc: 0, uss: 0, sim: 0 }
  },
  slopeSteepness: {
    units: { base: 'ratio', usc: '%', uss: '%', sim: '%' },
    decimals: { base: 2, usc: 0, uss: 0, sim: 0 }
  },
  temperature: {
    units: { base: 'F', usc: 'F', uss: 'F', sim: 'C' },
    decimals: { base: 0, usc: 0, uss: 0, sim: 0 }
  },
  windSpeed: {
    units: { base: 'ft/min', usc: 'mi/h', uss: 'mi/h', sim: 'km/h' },
    decimals: { base: 0, usc: 0, uss: 0, sim: 0 }
  }
}
