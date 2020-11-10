/**
 * Firescope variables
 */
import { Variant } from './Variants.js'

// Single-fuel surface fire ellipse
export const Config = [
  ['configure.fire.effectiveWindSpeedLimit', ['applied', 'ignored'][1]],
  ['configure.fire.weightingMethod', ['arithmetic', 'expected', 'harmonic'][0]],
  ['configure.fuel.curedHerbFraction', ['input', 'estimated'][1]],
  ['configure.fuel.moisture', ['individual', 'liveCategory', 'category', 'catalog'][0]],
  ['configure.fuel.primary', ['catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  ['configure.fuel.secondary', ['none', 'catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  ['configure.slope.steepness', ['ratio', 'degrees', 'map'][0]],
  ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][0]],
  ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][2]],
  ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][0]],
  // Less important
  ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][1]],
  ['configure.fire.lengthToWidthRatio', ['lengthToWidthRatio', 'effectiveWindSpeed'][0]],
  ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][0]],
  ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][0]]
]

export const Input = {
  airTemperature: {
    nodeKey: 'site.temperature.air',
    variant: Variant.temperature,
    range: { min: 30, max: 120, step: 5 },
    value: { base: 75 }
  },
  fuelModelCatalogKey: {
    nodeKey: 'surface.primary.fuel.model.catalogKey',
    variant: null,
    range: null,
    value: { base: '124' }
  },
  fuelMoistureDead1: {
    nodeKey: 'site.moisture.dead.tl1h',
    variant: Variant.fuelMoisture,
    range: { min: 0.01, max: 0.4, step: 0.01 },
    value: { base: 0.05 }
  },
  fuelMoistureDead10: {
    nodeKey: 'site.moisture.dead.tl10h',
    variant: Variant.fuelMoisture,
    range: { min: 0.01, max: 0.4, step: 0.01 },
    value: { base: 0.07 }
  },
  fuelMoistureDead100: {
    nodeKey: 'site.moisture.dead.tl100h',
    variant: Variant.fuelMoisture,
    range: { min: 0.01, max: 0.4, step: 0.01 },
    value: { base: 0.09 }
  },
  fuelMoistureLiveHerbase: {
    nodeKey: 'site.moisture.live.herb',
    variant: Variant.fuelMoisture,
    range: { min: 0.3, max: 4, step: 0.1 },
    value: { base: 0.5 }
  },
  fuelMoistureLiveStem: {
    nodeKey: 'site.moisture.live.stem',
    variant: Variant.fuelMoisture,
    range: { min: 0.3, max: 4, step: 0.1 },
    value: { base: 0.5 }
  },
  slopeDirectionAspect: {
    nodeKey: 'site.slope.direction.aspect',
    variant: Variant.compassAzimuth,
    range: { min: 0, max: 360, step: 5 },
    value: { base: 225 }
  },
  slopeSteepnessRatio: {
    nodeKey: 'site.slope.steepness.ratio',
    variant: Variant.slopeSteepness,
    range: { min: 0, max: 5, step: 0.05 }, // 0-200%, and 5% is 3 deg
    value: { base: 1 }
  },
  timeSinceIgnition: {
    nodeKey: 'site.fire.time.sinceIgnition',
    variant: Variant.fireTime,
    range: { min: 0, max: 24 * 60, step: 15 },
    value: { base: 60 }
  },
  windDirectionSourceFromNorth: {
    nodeKey: 'site.wind.direction.source.fromNorth',
    variant: Variant.compassAzimuth,
    range: { min: 0, max: 360, step: 5 },
    value: { base: 270 }
  },
  windSpeedAtMidflame: {
    nodeKey: 'site.wind.speed.atMidflame',
    variant: Variant.windSpeed,
    range: { min: 0, max: 40 * 88, step: 88 },
    value: { base: 880 }
  }
}

export const Output = {
  firelineIntensity: {
    nodeKey: 'surface.weighted.fire.firelineIntensity',
    variant: Variant.fireFirelineIntensity,
    value: { base: 0 }
  },
  flameLength: {
    nodeKey: 'surface.weighted.fire.flameLength',
    variant: Variant.fireFlameLength,
    value: { base: 0 }
  },
  fireHeadingFromNorth: {
    nodeKey: 'surface.weighted.fire.heading.fromNorth',
    variant: Variant.compassAzimuth,
    value: { base: 0 }
  },
  fireHeadingFromUpslope: {
    nodeKey: 'surface.weighted.fire.heading.fromUpslope',
    variant: Variant.compassAzimuth,
    value: { base: 0 }
  },
  heatPerUnitArea: {
    nodeKey: 'surface.weighted.fire.heatPerUnitArea',
    variant: Variant.fireHeatPerUnitArea,
    value: { base: 0 }
  },
  lengthToWidthRatio: {
    nodeKey: 'surface.weighted.fire.lengthToWidthRatio',
    variant: Variant.fireLengthToWidthRatio,
    value: { base: 1 }
  },
  reactionIntensity: {
    nodeKey: 'surface.weighted.fire.reactionIntensity',
    variant: Variant.fireReactionIntensity,
    value: { base: 0 }
  },
  scorchHeight: {
    nodeKey: 'surface.weighted.fire.scorchHeight',
    variant: Variant.fireScorchHt,
    value: { base: 0 }
  },
  spreadRate: {
    nodeKey: 'surface.weighted.fire.spreadRate',
    variant: Variant.fireSpreadRate,
    value: { base: 0 }
  },
  curedHerbFraction: {
    nodeKey: 'surface.primary.fuel.model.behave.parms.cured.herb.fraction',
    variant: Variant.fuelFraction,
    range: { min: 0, max: 1, step: 0.01 },
    value: { base: 0 }
  },
  backingFlameLength: {
    nodeKey: 'surface.fire.ellipse.back.flameLength',
    variant: Variant.fireFlameLength,
    value: { base: 0 }
  },
  backingScorchHeight: {
    nodeKey: 'surface.fire.ellipse.back.scorchHeight',
    variant: Variant.fireScorchHt,
    value: { base: 0 }
  },
  backingSpreadDistance: {
    nodeKey: 'surface.fire.ellipse.back.spreadDistance',
    variant: Variant.fireDistance,
    value: { base: 0 }
  },
  backingSpreadRate: {
    nodeKey: 'surface.fire.ellipse.back.spreadRate',
    variant: Variant.fireSpreadRate,
    value: { base: 0 }
  },
  flankingFlameLength: {
    nodeKey: 'surface.fire.ellipse.flank.flameLength',
    variant: Variant.fireFlameLength,
    value: { base: 0 }
  },
  flankingScorchHeight: {
    nodeKey: 'surface.fire.ellipse.flank.scorchHeight',
    variant: Variant.fireScorchHt,
    value: { base: 0 }
  },
  flankingSpreadDistance: {
    nodeKey: 'surface.fire.ellipse.flank.spreadDistance',
    variant: Variant.fireDistance,
    value: { base: 0 }
  },
  flankingSpreadRate: {
    nodeKey: 'surface.fire.ellipse.flank.spreadRate',
    variant: Variant.fireSpreadRate,
    value: { base: 0 }
  },
  headingFlameLength: {
    nodeKey: 'surface.fire.ellipse.head.flameLength',
    variant: Variant.fireFlameLength,
    value: { base: 0 }
  },
  headingScorchHeight: {
    nodeKey: 'surface.fire.ellipse.head.scorchHeight',
    variant: Variant.fireScorchHt,
    value: { base: 0 }
  },
  headingSpreadDistance: {
    nodeKey: 'surface.fire.ellipse.head.spreadDistance',
    variant: Variant.fireDistance,
    value: { base: 0 }
  },
  headingSpreadRate: {
    nodeKey: 'surface.fire.ellipse.head.spreadRate',
    variant: Variant.fireSpreadRate,
    value: { base: 0 }
  },
  fireArea: {
    nodeKey: 'surface.fire.ellipse.size.area',
    variant: Variant.fireArea,
    value: { base: 0 }
  },
  firePerimeter: {
    nodeKey: 'surface.fire.ellipse.size.perimeter',
    variant: Variant.fireDistance,
    value: { base: 0 }
  },
  fireLength: {
    nodeKey: 'surface.fire.ellipse.size.length',
    variant: Variant.fireDistance,
    value: { base: 0 }
  },
  fireWidth: {
    nodeKey: 'surface.fire.ellipse.size.width',
    variant: Variant.fireDistance,
    value: { base: 0 }
  }
}
