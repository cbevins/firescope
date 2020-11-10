<script>
  import Vertical from './Vertical'
  import { Input } from '../../model/Variables.js'
  import * as Compass from '../../model/compass.js'

  export let aspect
  export let steepness

  const aspectRange = Input.slopeDirectionAspect.range
  const steepnessRange = Input.slopeSteepnessRatio.range

  function aspectDegrees(aspect) {return aspect.toFixed(0) + '\u00B0'}
  function aspectDirection(aspect) {return Compass.point(aspect)}
  function steepnessDegrees(ratio) {return Compass.slopeDegrees(ratio).toFixed(0) + '\u00B0'}
  function steepnessPercent(ratio) {return (100 * ratio).toFixed(0) + '%'}
</script>

<svelte:head>
  <link rel="stylesheet" href="firescope.css">
</svelte:head>

<div class="firescope-vslider-group-2">
  <p class="firescope-vslider-title">Slope</p>
    <Vertical bind:value={steepness} label='Steep'
      min={steepnessRange.min} max={steepnessRange.max} step={steepnessRange.step}
      format1={steepnessDegrees}
      format2={steepnessPercent}
    />

    <Vertical bind:value={aspect} label='Asp'
      min={aspectRange.min} max={aspectRange.max} step={aspectRange.step}
      format1={aspectDegrees}
      format2={aspectDirection}
    />
</div>
