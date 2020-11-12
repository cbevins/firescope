<script>
  export let units
  let uoms = [
    { u: 'usc', text: 'US Customary'},
    { u: 'sim', text: 'SI Metric'},
    { u: 'uss', text: 'US Surveyor'},
    { u: 'base', text: 'Native Units'}
  ]
</script>

<select class='firescope-select' style='width:125px;' bind:value={units}>
	{#each uoms as uom}
		<option value={uom.u}>{uom.text}</option>
	{/each}
</select>
