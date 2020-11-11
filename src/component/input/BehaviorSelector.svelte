<script>
  export let behavior
  let behaviors = [
    { v: 'spreadRate', text: 'Spread Rate'},
    { v: 'spreadDistance', text: 'Spread Distance'},
    { v: 'flameLength', text: 'Flame Length'},
    { v: 'scorchHeight', text: 'ScorchHeight'},
  ]
</script>

<select class='firescope-select' bind:value={behavior}>
	{#each behaviors as b}
		<option value={b.v}>{b.text}</option>
	{/each}
</select>
