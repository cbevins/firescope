<script>
  import AirTemperature from '../slider/AirTemperature.svelte'
  import DeadFuelMoisture from '../slider/DeadFuelMoisture.svelte'
  import ElapsedTime from '../slider/ElapsedTime.svelte'
  import LiveFuelMoisture from '../slider/LiveFuelMoisture.svelte'
  import SlopeAspect from '../slider/SlopeAspect.svelte'
  import WindSpeedDirection from '../slider/WindSpeedDirection.svelte'

  import { firescope } from '../../model/store.js'
  import { slopeDegrees } from '../../model/compass.js'

  export let _input
  export let _output

  let area = firescope.displayString($_output.fireArea)
  let ros = firescope.displayString($_output.headingSpreadRate)
  let sh = firescope.displayString($_output.headingScorchHeight)
  let steepness = slopeDegrees($_input.slopeSteepnessRatio.value.base).toFixed(2) + ' deg'
  $: {
    area = firescope.displayString($_output.fireArea)
    ros = firescope.displayString($_output.headingSpreadRate)
    sh = firescope.displayString($_output.headingScorchHeight)
    steepness = slopeDegrees($_input.slopeSteepnessRatio.value.base).toFixed(2) + ' deg'
  }
</script>

<h1>Firescope</h1>
<table>
  <tr>
    <td><DeadFuelMoisture
      bind:tl1h={$_input.fuelMoistureDead1.value.base}
      bind:tl10h={$_input.fuelMoistureDead10.value.base}
      bind:tl100h={$_input.fuelMoistureDead100.value.base} /></td>
    <td><LiveFuelMoisture
      bind:herb={$_input.fuelMoistureLiveHerb.value.base}
      bind:stem={$_input.fuelMoistureLiveStem.value.base} /></td>
    <td><SlopeAspect
      bind:steepness={$_input.slopeSteepnessRatio.value.base}
      bind:aspect={$_input.slopeDirectionAspect.value.base} /></td>
    <td><WindSpeedDirection
      bind:speed={$_input.windSpeedAtMidflame.value.base}
      bind:direction={$_input.windDirectionSourceFromNorth.value.base} /></td>
    <td><AirTemperature
      bind:f={$_input.airTemperature.value.base} /></td>
    <td><ElapsedTime
      bind:minutes={$_input.timeSinceIgnition.value.base} /></td>
  </tr>
</table>
<p>Heading Spread Rate is {ros}</p>
<p>Heading Scorch Height is {sh}</p>
<p>Fire Area is {area}</p>
<p>Slope Steepness is {steepness}</p>
