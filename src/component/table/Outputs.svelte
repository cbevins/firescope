<script>
  import { thousands } from '../../model/format.js'

  export let _input
  export let _output

  let uom = $_input.uomSlate
  $: uom = $_input.uomSlate
</script>

<svelte:head>
  <link rel="stylesheet" href="firescope.css">
</svelte:head>

<div style="overflow-x:auto;">
  <table class='firescope-table'>
    {#each Object.keys($_output) as key}
      {#if $_output[key].group != 'Surface Primary'}
        <tr>
          <td class='firescope-table-label'>
            {$_output[key].group}&nbsp;{$_output[key].label}</td>
          <td class='firescope-table-value'>
            {thousands($_output[key].value[uom], $_output[key].variant.decimals[uom])}</td>
          <td class='firescope-table-units'>
            {$_output[key].variant.units[uom]}</td>
        </tr>
        {/if}
    {/each}
  </table>
</div>
