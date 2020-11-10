<script>
  import TabApp from '../tabs/TabApp.svelte'
  import Panel from '../input/Panel.svelte'

  export let _input
  export let _output
</script>

<div>
  <TabApp _input={_input} _output={_output} />
  <hr/>
  <Panel _input={_input} _output={_output} />
</div>
