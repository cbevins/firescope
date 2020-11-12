<script>
  // This input selector is useful for selecting graph x variables
  export let selected
  export let _input
  let items = []
  Object.keys($_input).forEach(key => {
    const item = $_input[key]
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
