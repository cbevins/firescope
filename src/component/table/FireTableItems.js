const backing = 'Backing'
const direction = 'Fire Heading'
const distance = 'Spread Distance'
const ellipse = 'Fire Ellipse'
const flanking = 'Flanking'
const fuel = 'Fuel'
const heading = 'Heading'
const flame = 'Flame Length'
const ros = 'Spread Rate'
const scorch = 'Scorch Height'

export const FireTableItems = [
  { group: ellipse, label: 'Area', prop: 'fireArea', dec: 0 },
  { group: ellipse, label: 'Perimeter', prop: 'firePerimeter', dec: 0 },
  { group: ellipse, label: 'Length/width', prop: 'lengthToWidthRatio', dec: 2 },
  { group: ellipse, label: 'Length', prop: 'fireLength', dec: 0 },
  { group: ellipse, label: 'Width', prop: 'fireWidth', dec: 0 },
  { group: direction, label: 'from North', prop: 'fireHeadingFromNorth', dec: 0 },
  { group: direction, label: 'from Upslope', prop: 'fireHeadingFromUpslope', dec: 0 },
  { group: heading, label: ros, prop: 'headingSpreadRate', dec: 2 },
  { group: heading, label: distance, prop: 'headingSpreadDistance', dec: 0 },
  { group: heading, label: flame, prop: 'headingFlameLength', dec: 2 },
  { group: heading, label: scorch, prop: 'headingScorchHeight', dec: 2 },
  { group: flanking, label: ros, prop: 'flankingSpreadRate', dec: 2 },
  { group: flanking, label: distance, prop: 'flankingSpreadDistance', dec: 0 },
  { group: flanking, label: flame, prop: 'flankingFlameLength', dec: 2 },
  { group: flanking, label: scorch, prop: 'flankingScorchHeight', dec: 2 },
  { group: backing, label: ros, prop: 'backingSpreadRate', dec: 2 },
  { group: backing, label: distance, prop: 'backingSpreadDistance', dec: 0 },
  { group: backing, label: flame, prop: 'backingFlameLength', dec: 2 },
  { group: backing, label: scorch, prop: 'backingScorchHeight', dec: 2 },
  { group: fuel, label: 'Cured Herb', prop: 'curedHerbFraction', dec: 2 }
]
