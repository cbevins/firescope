<script>
  import Tabs from './Tabs.svelte'
  import InputPanel from './InputPanel.svelte'

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
      <Tabs _input={_input} _output={_output} />
    </div>
  </div>
  <hr/>
  <div class='row'>
    <div class='col-sm'>
      <InputPanel _input={_input} _output={_output} />
      </div>
  </div>
</div>
