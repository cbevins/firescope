<script>
  import Experimental from '../experimental/Experimental.svelte'
  import FireScope from '../scope/Scope.svelte'
  import SvgFireScope from '../experimental/SvgFireScope.svelte'
  // import SvgFireTable from '../experimental/SvgFireTable.svelte'
  import Graph from '../graph/Graph.svelte'
  import Inputs from '../table/Inputs.svelte'
  import Outputs from '../table/Outputs.svelte'
  // import Reels from '../reels/Reels.svelte'

  export let _input
  export let _output

  let tabs = [
    {href: 'firescope', label: 'Firescope'},
    // {href: 'firetable', label: 'Fire Table'},
    // {href: 'reels', label: 'Reels'},
    {href: 'inputs', label: 'Inputs'},
    {href: 'outputs', label: 'Outputs'},
    {href: 'graph', label: 'Graph'},
    {href: 'experimental', label: 'Experimental'},
  ]
</script>

<ul class="nav nav-tabs" id="myTab" role="tablist">
  {#each tabs as tab, idx}
    <li class="nav-item" role="presentation">
      <a id="{tab.href}-tab" href="#{tab.href}" aria-controls="{tab.href}"
        class="nav-link {idx ? '':'active'}" data-toggle="tab" role="tab" aria-selected="false">
        {tab.label}</a>
    </li>
  {/each}
</ul>

<div class="tab-content" id="myTabContent">
  <div id="firescope" aria-labelledby="firescope-tab"class="tab-pane fade show active" role="tabpanel" >
    <FireScope _output={_output} _input={_input}/>
  </div>
  <!-- <div id="reels" aria-labelledby="reels-tab" class="tab-pane fade" role="tabpanel" >
    <Reels _input={_input} _output={_output} />
  </div> -->
  <div id="inputs" aria-labelledby="inputs-tab" class="tab-pane fade" role="tabpanel" >
    <Inputs _input={_input} />
  </div>
  <div id="outputs" aria-labelledby="outputs-tab" class="tab-pane fade" role="tabpanel" >
    <Outputs _input={_input} _output={_output} />
  </div>
  <div id="graph" aria-labelledby="graph-tab" class="tab-pane fade" role="tabpanel" >
    <Graph _input={_input} _output={_output} />
  </div>
  <div id="experimental" aria-labelledby="experimental-tab" class="tab-pane fade" role="tabpanel" >
    <Experimental _input={_input} _output={_output} />
  </div>
</div>
