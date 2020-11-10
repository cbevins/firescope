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
  // export let _output
</script>

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
