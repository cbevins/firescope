<script>
	import { fade, slide } from 'svelte/transition';
	import { getContext } from 'svelte'
	import { TABS } from './Tabs.svelte'

	const panel = {}
	const { registerPanel, selectedPanel } = getContext(TABS)

	registerPanel(panel)
</script>

{#if $selectedPanel === panel}
  <div transition:slide>
	  <slot></slot>
  </div>
{/if}
