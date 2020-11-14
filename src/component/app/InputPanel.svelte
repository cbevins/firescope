<script>
  import AirTemperature from '../slider/AirTemperature.svelte'
  import DeadFuelMoisture from '../slider/DeadFuelMoisture.svelte'
  import ElapsedTime from '../slider/ElapsedTime.svelte'
  import FuelSelector from '../input/FuelSelector.svelte'
  import LiveFuelMoisture from '../slider/LiveFuelMoisture.svelte'
  import SlopeAspect from '../slider/SlopeAspect.svelte'
  import UnitsSelector from '../input/UnitsSelector.svelte'
  import WindSpeedDirection from '../slider/WindSpeedDirection.svelte'

  import { firescope } from '../../model/store.js'
  import { slopeDegrees } from '../../model/compass.js'

  export let _input
  // export let _output
</script>

<div class='row'>
  <div class='col'>
    <FuelSelector bind:key={$_input.fuelModelCatalogKey.value.base}/>
  </div>
</div>

<div class='row'>
  <div class='col'>
    <UnitsSelector bind:units={$_input.uomSlate} />
  </div>
</div>

<div class='row'>
  <div class='col-6'>
    <DeadFuelMoisture
      bind:tl1h={$_input.fuelMoistureDead1.value.base}
      bind:tl10h={$_input.fuelMoistureDead10.value.base}
      bind:tl100h={$_input.fuelMoistureDead100.value.base} />
  </div>
  <div class='col'>
    <LiveFuelMoisture
      bind:herb={$_input.fuelMoistureLiveHerb.value.base}
      bind:stem={$_input.fuelMoistureLiveStem.value.base} />
  </div>
</div>

<div class='row'>
  <div class='col-4'>
    <SlopeAspect
      bind:steepness={$_input.slopeSteepnessRatio.value.base}
      bind:aspect={$_input.slopeDirectionAspect.value.base} />
  </div>
  <div class='col-4'>
    <WindSpeedDirection
      bind:speed={$_input.windSpeedAtMidflame.value.base}
      bind:direction={$_input.windDirectionSourceFromNorth.value.base} />
  </div>
  <div class='col-2'>
    <AirTemperature
      bind:f={$_input.airTemperature.value.base} />
  </div>
  <div class='col-2'>
    <ElapsedTime
      bind:minutes={$_input.timeSinceIgnition.value.base} />
  </div>
</div>
