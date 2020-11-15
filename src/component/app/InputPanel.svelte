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

<FuelSelector bind:key={$_input.fuelModelCatalogKey.value.base}/>
<UnitsSelector bind:units={$_input.uomSlate} />

<button class="btn btn-outline-secondary btn-sm btn-block" data-toggle="collapse" type="button" aria-expanded="false"
    data-target="#deadFuelMoisture" aria-controls="deadFuelMoisture">
  Dead Fuel Moisture
</button>
<div class="collapse" id="deadFuelMoisture">
  <div class="card card-body">
    <DeadFuelMoisture
      bind:tl1h={$_input.fuelMoistureDead1.value.base}
      bind:tl10h={$_input.fuelMoistureDead10.value.base}
      bind:tl100h={$_input.fuelMoistureDead100.value.base} />
  </div>
</div>

<button class="btn btn-outline-secondary btn-sm btn-block" data-toggle="collapse" type="button" aria-expanded="false"
    data-target="#liveFuelMoisture" aria-controls="liveFuelMoisture">
  Live Fuel Moisture
</button>
<div class="collapse" id="liveFuelMoisture">
  <div class="card card-body">
    <LiveFuelMoisture
      bind:herb={$_input.fuelMoistureLiveHerb.value.base}
      bind:stem={$_input.fuelMoistureLiveStem.value.base} />
  </div>
</div>

<button class="btn btn-outline-secondary btn-sm btn-block" data-toggle="collapse" type="button" aria-expanded="false"
    data-target="#slopeAspect" aria-controls="slopeAspect">
  Slope &amp; Aspect
</button>
<div class="collapse" id="slopeAspect">
  <div class="card card-body">
    <SlopeAspect
      bind:steepness={$_input.slopeSteepnessRatio.value.base}
      bind:aspect={$_input.slopeDirectionAspect.value.base} />
  </div>
</div>

<button class="btn btn-outline-secondary btn-sm btn-block" data-toggle="collapse" type="button" aria-expanded="false"
    data-target="#windSpeedDirection" aria-controls="windSpeedDirection">
  Wind Speed &amp; Direction
</button>
<div class="collapse" id="windSpeedDirection">
  <div class="card card-body">
    <WindSpeedDirection
      bind:speed={$_input.windSpeedAtMidflame.value.base}
      bind:direction={$_input.windDirectionSourceFromNorth.value.base} />
  </div>
</div>

<button class="btn btn-outline-secondary btn-sm btn-block" data-toggle="collapse" type="button" aria-expanded="false"
    data-target="#airTemperature" aria-controls="airTemperature">
  Air Temperature
</button>
<div class="collapse" id="airTemperature">
  <div class="card card-body">
    <AirTemperature
      bind:f={$_input.airTemperature.value.base} />
  </div>
</div>

<button class="btn btn-outline-secondary btn-sm btn-block" data-toggle="collapse" type="button" aria-expanded="false"
    data-target="#elapsedTime" aria-controls="elapsedTime">
  Elapsed Time
</button>
<div class="collapse" id="elapsedTime">
  <div class="card card-body">
    <ElapsedTime
      bind:minutes={$_input.timeSinceIgnition.value.base} />
  </div>
</div>
