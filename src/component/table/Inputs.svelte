<script>
  import { thousands } from '../../model/format.js'

  export let _input

  let uom = $_input.uomSlate
  $: uom = $_input.uomSlate
</script>

<svelte:head>
  <link rel="stylesheet" href="firescope.css">
</svelte:head>

<div style="overflow-x:auto;">
  <table class='firescope-table'>
    {#each Object.keys($_input) as key}
      <tr>
        <td class='firescope-table-label'>
          {$_input[key].group}&nbsp;{$_input[key].label}</td>
        {#if $_input[key].variant.type === 'Quantity'}
          <td class='firescope-table-value'>
            {thousands($_input[key].value[uom], $_input[key].variant.decimals[uom])}</td>
          <td class='firescope-table-units'>
            {$_input[key].variant.units[uom]}</td>
        {:else}
          <td class='firescope-table-value'>{$_input[key].value.base}</td>
          <td></td>
        {/if}
      </tr>
    {/each}
  </table>
</div>
