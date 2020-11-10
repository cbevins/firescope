<script>
  export let title1
  export let title2
  export let units
  export let value
</script>

<div class='firescope-reel-box'>
  <div class='firescope-reel-title'>{title1}</div>
  <div class='firescope-reel-title'>{title2}</div>
  <div class='firescope-reel-units'>{units}</div>
  <div class='firescope-reel-value'>{value}</div>
</div>

<style>
  * {
    box-sizing: border-box;
  }
  .firescope-reel-box {
    font-family: "Lucida Sans", sans-serif;
    font-size: 16px;
    width: 100px;
    padding-left: 5px;
    padding-right: 5px;
    margin: 0;
    float: left;
    box-shadow: 0 1px 3px rgba(0,0,0,0.24), 0 1px 2px rgba(0,0,0,0.48);
  }
  .firescope-reel-title {
    font: bold 20px sans-serif;
    text-align: center;
    display: block;
  }
  .firescope-reel-units {
    font: oblique 16px sans-serif;
    text-align: center;
    display: block;
  }
  .firescope-reel-value {
    font: normal 20px sans-serif;
    text-align: center;
    display: block;
  }
</style>
