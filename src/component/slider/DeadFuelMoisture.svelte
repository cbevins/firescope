<script>
  import Vertical from './Vertical.svelte'
  import { Input } from '../../model/Variables.js'

  export let tl1h
  export let tl10h
  export let tl100h

  const range = Input.fuelMoistureDead1.range
  function format1(v) {return '\u00A0'}
  function format2(v) {return (100 * v).toFixed(0) + '%'}

  let items = [
    {label: '1-h', value: tl1h},
    {label: '10-h', value: tl10h},
    {label: '100-h', value: tl100h},
  ]
  $: {
    tl1h = items[0].value
    tl10h = items[1].value
    tl100h = items[2].value
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="firescope.css">
</svelte:head>

<div class="firescope-vslider-group-3">
  <p class="firescope-vslider-title">Dead Fuel Moisture</p>
  {#each items as item}
    <Vertical bind:value={item.value} label={item.label}
      min={range.min} max={range.max} step={range.step}
      format1={format1}
      format2={format2}
    />
  {/each}
</div>
