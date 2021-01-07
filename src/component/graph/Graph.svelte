<script>
	import { afterUpdate, onMount } from 'svelte'
  import { fade, slide } from 'svelte/transition'
  import { Chart } from 'chart.js'
  import InputSelector from '../input/InputSelector.svelte'
  import OutputSelector from '../input/OutputSelector.svelte'

  export let _input
  export let _output

  let showTable = false
  function handleTable() {showTable = !showTable}

  let ctx, myChart
  let xLabel, yLabel
  function createGraph() {
    const x = $_input.graph.x
    const y = $_input.graph.y
    const uom = $_input.uomSlate
    const xUnits = x.item.variant.units[uom]
    const yUnits = y.item.variant.units[uom]
    xLabel = `${x.item.group} ${x.item.label} (${xUnits})`
    yLabel = `${y.item.group} ${y.item.label} (${yUnits})`
    const lineGraph = {
      type: 'line',
      data: {
        labels: x.values[uom],
        datasets: [{
          data: y.values[uom],
          label: yLabel
        }]
      },
      options: {
        animation: {
          duration: 0
        },
        display: true,
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: xLabel
            },
            ticks: {
              maxTicksLimit: 11,
              major: {
                fontStyle: 'bold',
                fontColor: '#FF0000'
              }
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: yLabel
            }
          }],
        },
        title: y.key
      }
    }
    ctx = document.getElementById('myChart').getContext('2d')
    if (myChart) myChart.destroy()
    myChart = new Chart(ctx, lineGraph)
  }
  afterUpdate(createGraph)
  //onMount(createGraph)
</script>

<div class="card" style="width: 100%;">
  <div class="card-body">
    <div class="chart-container">
      <canvas id="myChart" responsive='true'></canvas>
    </div>

    <table>
      <tr>
        <td>X</td>
        <td><InputSelector bind:selected={$_input.graph.x.key} _input={_input}/></td>
        <td>Y</td>
        <td><OutputSelector bind:selected={$_input.graph.y.key} _output={_output}/></td>
        <td>
          <button type="button"
            class="btn btn-outline-secondary btn-sm"
            on:click={handleTable}>
            {showTable ? 'Hide Graph Data' : 'Show Graph Data'}
          </button>
        </td>
      </tr>
    </table>
  </div>

  <p></p>
  {#if showTable }
    <div transition:fade>
      <table>
        <tr>
          <td>Idx</td>
          <td align='right'>{xLabel}</td>
          <td align='right'>{yLabel}</td>
        </tr>
        {#each $_input.graph.x.values[$_input.uomSlate] as x, idx}
          <tr>
            <td>{idx}</td>
            <td>{x}</td>
            <td>{$_input.graph.y.values[$_input.uomSlate][idx]}</td>
          </tr>
          {/each}
      </table>
    </div>
  {/if}
</div>
