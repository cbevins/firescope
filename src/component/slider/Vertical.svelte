<script>
  export let label
  export let min = 0
  export let max = 100
  export let step = 1
  export let value = 0
  export let format1 = (v) => v
  export let format2 = (v) => v

  function down() {value = Math.max(min, value-step)}
  function up() {value = Math.min(max, value+step)}
</script>

<svelte:head>
  <link rel="stylesheet" href="firescope.css">
  <script defer src="/fontawesome/js/all.js"></script>
</svelte:head>

<div class="firescope-vslider">
  <p class="firescope-vslider-label">{label}</p>
  <p class="firescope-vslider-value">{format1(value)}</p>
  <p class="firescope-vslider-value">{format2(value)}</p>
  <p class="firescope-vslider-value">
    <button class="firescope-vslider-arrow" on:click={up}>
      <i class="fas fa-angle-up"></i>
    </button>
    <button class="firescope-vslider-arrow" on:click={down}>
      <i class="fas fa-angle-down"></i>
    </button>
  </p>
  <div class="firescope-vslider-wrapper">
    <input bind:value={value} type="range" min={min} max={max} step={step}/>
  </div>
</div>
