<script>
  import { thousands } from '../../model/format.js'

  export let width
  export let height
  export let viewbox
  export let _input
  export let _output

  let uom = $_input.uomSlate
  $: {
    uom = $_input.uomSlate
  }
</script>

<svg viewBox={viewbox} width={width} height={height} >
    {#each Object.keys($_output) as key, idx}
      {#if $_output[key].group != 'Surface Primary'}
      <!-- {#if $_output[key].group !== prevGroup}
        <line class='sep-line' x1='0' y1={6*idx+6} x2='80' y2={6*idx+6} />
        {prevGroup = $_output[key].group}
      {/if} -->
      <text x="0" y={6*idx+6} class='firescope-svgtable-info-text'>
        {$_output[key].group + ' ' +$_output[key].label}</text>
      <text x="50" y={6*idx+6} class='firescope-svgtable-value-text'>
        {thousands($_output[key].value[uom], $_output[key].variant.decimals[uom])}</text>
      <text x="70" y={6*idx+6} class='firescope-svgtable-units-text'>
        {$_output[key].variant.units[uom]}
      </text>
    {/if}
  {/each}
</svg>

<style>
  .firescope-svgtable-info-text {
    font: normal 4px sans-serif;
  }
 	/* .sep-line {
		stroke: #111;
		stroke-width: 0.5;
	} */
  .firescope-svgtable-units-text {
    font: normal italic 4px sans-serif;
    text-align: right;
  }
  .firescope-svgtable-value-text {
    font: normal 4px sans-serif;
    text-align: right;
  }
</style>
