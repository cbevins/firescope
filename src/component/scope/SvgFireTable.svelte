<script>
  import { thousands } from '../../model/format.js'
  import { FireTableItems } from '../table/FireTableItems.js'

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
  {#each FireTableItems as item, idx}
    <!-- {#if item.group !== prevGroup}
      <line class='sep-line' x1='0' y1={6*idx+6} x2='80' y2={6*idx+6} />
      {prevGroup = item.group}
    {/if} -->
    <text x="0" y={6*idx+6} class='firescope-svgtable-info-text'>
      {item.group + ' ' +item.label}</text>
    <text x="50" y={6*idx+6} class='firescope-svgtable-value-text'>
      {thousands($_output[item.prop].value[uom], item.dec)}</text>
    <text x="70" y={6*idx+6} class='firescope-svgtable-units-text'>
      {$_output[item.prop].variant.units[uom]}
    </text>
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
