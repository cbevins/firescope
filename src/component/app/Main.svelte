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
    <div class='col-sm-4'>
      <div class='card'>
        <div class='card-body'>
          <div class='overflow-auto'>
            <InputPanel _input={_input} _output={_output} />
          </div>
        </div>
      </div>
    </div>
    <div class='col-sm'>
      <div class='card'>
        <div class='card-body'>
          <div class='overflow-auto'>
            <Tabs _input={_input} _output={_output} />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
