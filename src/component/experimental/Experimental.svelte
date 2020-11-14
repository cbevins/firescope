<script>
  import BehaviorSelector from '../input/BehaviorSelector.svelte'
  import SvgFireScope from './SvgFireScope.svelte'
  import SvgFireTable from './SvgFireTable.svelte'
  export let _input
  export let _output
</script>

<div class='row'>
  <div class='col-sm'>
    <div class="card" style="width: 100%;">
      <div class="card-body">
        <h5 class="card-title">
        <div class='row'>
          <img src='favicon.png' alt='logo'/>
          Fire Scope 0.2.0
          <BehaviorSelector bind:behavior={$_input.behavior} />
        </div>
        </h5>
        <SvgFireScope _output={_output} _input={_input}/>
      </div>
    </div>
  </div>
  <div class='col-sm'>
    <div class="card" style="width: 16rem;padding: 0rem;">
      <div class="card-body">
        <SvgFireTable viewbox="20, 0, 80, 130"
          width=300 height=300 _output={_output} _input={_input}/>
      </div>
    </div>
  </div>
</div>
