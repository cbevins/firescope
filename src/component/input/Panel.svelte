<script>
  import DeadFuelMoisture from '../slider/DeadFuelMoisture.svelte'
  import { firescope } from '../../model/store.js'
  export let _input
  export let _output

  let ros = firescope.displayString($_output.headingSpreadRate)
  $: {
    ros = firescope.displayString($_output.headingSpreadRate)
  }
</script>

<h1>Firescope</h1>
<table>
  <tr>
    <td><DeadFuelMoisture
      bind:tl1h={$_input.fuelMoistureDead1.value.base}
      bind:tl10h={$_input.fuelMoistureDead10.value.base}
      bind:tl100h={$_input.fuelMoistureDead100.value.base} /></td>
  </tr>
</table>
<p>Heading Spread Rate is {ros}</p>
