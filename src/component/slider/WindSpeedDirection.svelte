<script>
  import Vertical from './Vertical.svelte'
  import { Input } from '../../model/Variables.js'
  import * as Compass from '../../model/compass.js'

  export let direction
  export let speed

  const directionRange = Input.windDirectionSourceFromNorth.range
  const speedRange = Input.windSpeedAtMidflame.range

  function directionDegrees(azimuth) {return azimuth.toFixed(0) + '\u00B0'}
  function directionPoint(azimuth) {return Compass.point(azimuth)}
  function speedMph(fpm) {return (fpm/88).toFixed(0) + 'mph'}
  function speedKph(fpm) {return (1.60934*fpm/88).toFixed(0) + 'kph'}
</script>

<svelte:head>
  <link rel="stylesheet" href="firescope.css">
</svelte:head>

<div class="firescope-vslider-group-2">
  <p class="firescope-vslider-title">Midflame Wind</p>
    <Vertical bind:value={speed} label='Speed'
      min={speedRange.min} max={speedRange.max} step={speedRange.step}
      format1={speedMph}
      format2={speedKph}
    />
    <Vertical bind:value={direction} label='From'
      min={directionRange.min} max={directionRange.max} step={directionRange.step}
      format1={directionDegrees}
      format2={directionPoint}
    />
</div>
