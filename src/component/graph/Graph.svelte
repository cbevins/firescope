<script>
  import InputSelector from '../input/InputSelector.svelte'
  import OutputSelector from '../input/OutputSelector.svelte'

  export let _input
  export let _output
</script>

<table>
  <tr>
    <td>Graph X Variable</td>
    <td><InputSelector bind:selected={$_input.graph.x.key} _input={_input}/></td>
  </tr>
  <tr>
    <td>Graph Y Variable</td>
    <td><OutputSelector bind:selected={$_input.graph.y.key} _output={_output}/></td>
  </tr>
</table>

<table>
  <tr>
    <td>Idx</td>
    <td>{$_input.graph.x.key}</td>
    <td>{$_input.graph.y.key}</td>
  </tr>
  {#each $_input.graph.x.values.base as x, idx}
    <tr>
      <td>{idx}</td>
      <td>{x}</td>
      <td>{$_input.graph.y.values.base[idx]}</td>
    </tr>
    {/each}
</table>
