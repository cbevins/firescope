<script>
  export let _input
  export let _output
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

<div class='row'>
  <div class='col-sm'>
    <div class="card" style="width: 16rem;">
      <div class="card-body">
        <h6 class="card-title">Dead Fuel Moistures</h6>
          {#each items as item}
          <div class='row'>
            {item.label}
            <input type='range' style='padding: 0rem;margin: 0rem;'
              bind:value={item.value}
              min={range.min}
              max={range.max}
              step={range.step}
            />
          </div>
          {/each}
      </div>
    </div>
  </div>
</div>