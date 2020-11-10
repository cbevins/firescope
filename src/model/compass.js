export function point(azimuth) {
  const Dir = ['NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
    'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
  const span = 360 / (Dir.length + 1)
  const half = span / 2
  if (azimuth < half || azimuth >= 360-half) return 'N'
  const idx = Math.trunc((azimuth - half) / span)
  return Dir[idx]
}

export function toDegrees (rad) {
  return (rad * 180) / Math.PI
}

export function toRadians (deg) {
  return (deg * Math.PI) / 180
}

export function slopeDegrees (ratio) {
  const rad = Math.atan(ratio)
  return toDegrees(rad)
}

export function slopeRatio (deg) {
  const rad = toRadians(deg)
  return Math.tan(rad)
}
