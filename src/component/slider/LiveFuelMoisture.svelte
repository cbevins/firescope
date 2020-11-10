<script>
  import Vertical from './Vertical'
  import { Input } from '../../model/Variables.js'

  export let herb
  export let stem

  const range = Input.fuelMoistureLiveHerb.range
  function format1(v) {return '\u00A0'}
  function format2(v) {return (100 * v).toFixed(0) + '%'}

let items = [
    {label: 'herb', value: herb},
    {label: 'stem', value: stem},
  ]
  $: {
    herb = items[0].value
    stem = items[1].value
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="firescope.css">
</svelte:head>

<div class="firescope-vslider-group-2">
  <p class="firescope-vslider-title">Live Fuel Moist</p>
  {#each items as item}
    <Vertical bind:value={item.value} label={item.label}
      min={range.min} max={range.max} step={range.step}
      format1={format1}
      format2={format2}
    />
  {/each}
</div>
