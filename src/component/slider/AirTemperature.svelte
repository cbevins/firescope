<script>
  import Vertical from './Vertical'
  import { Input } from '../../model/Variables.js'

  export let f

  const range = Input.airTemperature.range
  function fahrenheit(f) { return f.toFixed(0) + '\u2109'}
  function centigrade(f) { return (5 * (f-32) / 9).toFixed(0) + '\u2103' }
</script>

<svelte:head>
  <link rel="stylesheet" href="firescope.css">
</svelte:head>

<div class="firescope-vslider-group-1">
  <p class="firescope-vslider-title">Temp</p>
    <Vertical bind:value={f} label='Air'
      min={range.min} max={range.max} step={range.step}
      format1={fahrenheit}
      format2={centigrade}
    />
</div>
