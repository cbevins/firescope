<script>
  import ReelBox from './ReelBox.svelte'
  export let _input
  export let _output
  let uomSlate = $_input.uomSlate
  $: {
    uomSlate = $_input.uomSlate
  }
</script>

<div class="firescope-reels-slider-row">
  <ReelBox title1='Spread' title2='Rate'
    units={$_output.spreadRate.variant.units[uomSlate]}
    value={$_output.spreadRate.value[uomSlate].toFixed(2)} />
  <ReelBox title1='Fire' title2='Heading'
    units='&#x00B0 from N';
    value={$_output.fireHeadingFromNorth.value[uomSlate].toFixed(0)} />
  <ReelBox title1='Flame' title2='Length'
    units={$_output.flameLength.variant.units[uomSlate]}
    value={$_output.flameLength.value[uomSlate].toFixed(2)} />
  <ReelBox title1='Scorch' title2='Height'
    units={$_output.scorchHeight.variant.units[uomSlate]}
    value={$_output.scorchHeight.value[uomSlate].toFixed(2)} />
  <ReelBox title1='Fire' title2='Area'
    units={$_output.fireArea.variant.units[uomSlate]}
    value={$_output.fireArea.value[uomSlate].toFixed(2)} />
  <ReelBox title1='Fire' title2='Perim'
    units={$_output.firePerimeter.variant.units[uomSlate]}
    value={$_output.firePerimeter.value[uomSlate].toFixed(0)} />
</div>

<style>
  * {
    box-sizing: border-box;
  }

  .firescope-reels-slider-row::after {
    content: "";
    clear: both;
    display: table;
  }
</style>
