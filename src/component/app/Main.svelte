<script>
  import TabApp from '../tabs/TabApp.svelte'
  import Panel from '../input/Panel.svelte'

  export let _input
  export let _output
</script>

<svelte:head>
  <link rel="stylesheet" href="bootstrap.min.css">
  <link rel="stylesheet" href="firescope.css">
</svelte:head>

<div class="container-lg">
  <div class='row'>
    <div class='col-sm'>
      <TabApp _input={_input} _output={_output} />
    </div>
  </div>
  <hr/>
  <div class='row'>
    <div class='col-sm'>
      <Panel _input={_input} _output={_output} />
      </div>
  </div>
</div>
