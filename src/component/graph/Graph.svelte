<script>
  import InputSelector from '../input/InputSelector.svelte'
  import OutputSelector from '../input/OutputSelector.svelte'

  export let _input
  export let _output
</script>

<table>
  <tr>
    <td>Graph X Variable</td>
    <td><InputSelector bind:selected={$_input.graph.xvar} _input={_input}/></td>
  </tr>
  <tr>
    <td>Graph Y Variable</td>
    <td><OutputSelector bind:selected={$_input.graph.yvar} _output={_output}/></td>
  </tr>
</table>

<p>input.grap.xvar = {$_input.graph.xvar}</p>
<p>input.grap.yvar = {$_input.graph.yvar}</p>
