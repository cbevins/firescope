<script>
	import { afterUpdate, onMount } from 'svelte'
  import InputSelector from '../input/InputSelector.svelte'
  import OutputSelector from '../input/OutputSelector.svelte'
  import {barChart, multiLineGraph} from './sampleData.js'

  export let _input
  export let _output

  let ctx, myChart
  function createGraph() {
    const lineGraph = {
      type: 'line',
      data: {
        labels: $_input.graph.x.values[$_input.uomSlate],
        datasets: [{
          data: $_input.graph.y.values[$_input.uomSlate],
          label: $_input.graph.y.key
        }]
      },
      options: {
        display: true,
        title: $_input.graph.y.key
      }
    }
    ctx = document.getElementById('myChart').getContext('2d')
    if (myChart) myChart.destroy()
    myChart = new Chart(ctx, lineGraph)
  }
  afterUpdate(createGraph)
  //onMount(createGraph)
</script>

<canvas id="myChart" width="400" height="200"></canvas>

<table>
  <tr>
    <td>Idx</td>
    <td><InputSelector bind:selected={$_input.graph.x.key} _input={_input}/></td>
    <td><OutputSelector bind:selected={$_input.graph.y.key} _output={_output}/></td>
  </tr>
  {#each $_input.graph.x.values.base as x, idx}
    <tr>
      <td>{idx}</td>
      <td>{x}</td>
      <td>{$_input.graph.y.values.base[idx]}</td>
    </tr>
    {/each}
</table>
