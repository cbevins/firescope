<script>
  import Vertical from './Vertical'
  import { Input } from '../../model/Variables.js'

  export let minutes

  const range = Input.timeSinceIgnition.range
  function format1(min) { return 'Ignited'}
  function format2(min) { return (min===0) ? 0 : (min/60).toFixed(2) + 'h'}
</script>

<svelte:head>
  <link rel="stylesheet" href="firescope.css">
</svelte:head>

<div class="firescope-vslider-group-1">
  <p class="firescope-vslider-title">Time</p>
    <Vertical bind:value={minutes} label='Since'
      min={range.min} max={range.max} step={range.step}
      format1={format1}
      format2={format2}
    />
</div>
