<script>
  import { FireTableItems } from './FireTableItems.js'
  import { thousands } from '../../model/format.js'

  export let _input
  export let _output

  let uom = $_input.uomSlate
  $: {
    uom = $_input.uomSlate
  }
</script>

<div style="overflow-x:auto;">
  <table>
    {#each FireTableItems as item}
      <tr>
        <td class='firescope-firetable-label'>{item.group}&nbsp;{item.label}</td>
        <td class='firescope-firetable-value'>{thousands($_output[item.prop].value[uom], item.dec)}</td>
        <td class='firescope-firetable-units'>{$_output[item.prop].variant.units[uom]}</td>
      </tr>
    {/each}
  </table>
</div>

<style>
table {
  width: 100%;
  border: 1px solid green;
  border-collapse: collapse;
  padding: 0;
}
/* caption {
  caption-side: bottom;
  firescope-firetable-align: center;
} */
tr:nth-child(even) {
  background-color: #f2f2f2;
}
tr:hover {
  background-color: #f5f5f5;
}
/* th {
  background-color: #4CAF50;
  color: white;
  padding: 5px;
  border-bottom: 1px solid #ddd;
} */
td {
  padding: 5px;
  border-bottom: 1px solid #ddd;
}
.firescope-firetable-label {
  font-family: "Lucida Sans", sans-serif;
  font-size: 12px;
  text-align: left;
}
.firescope-firetable-units {
  font-family: "Lucida Sans", sans-serif;
  font-size: 12px;
  font-style: italic;
  font-weight: normal;
  text-align: left;
}
.firescope-firetable-value {
  font-family: "Lucida Sans", sans-serif;
  font-size: 12px;
  text-align: right;
}
</style>