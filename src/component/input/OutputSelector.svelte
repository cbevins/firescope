<script>
  // This output selector is useful for selecting graph y variables
  export let selected
  export let _output
  let items = []
  Object.keys($_output).forEach(key => {
    const item = $_output[key]
    if (item.variant.type === 'Quantity') {
      items.push({key: key, text: item.group + ' ' + item.label})
    }
  })
</script>

<select class='firescope-select' bind:value={selected}>
	{#each items as item}
		<option value={item.key}>{item.text}</option>
	{/each}
</select>
