<script>
  import BehaviorSelector from '../input/BehaviorSelector.svelte'

  export let width
  export let height
  export let _input
  export let _output

  function atX(origin, offset, deg) {
    return origin + offset * Math.sin(deg * Math.PI / 180)
  }
  function atY(origin, offset, deg) {
    return origin - offset * Math.cos(deg * Math.PI / 180)
  }
  function opposite(deg) { return deg >= 180 ? deg-180 : deg+180 }

  let aspect = $_input.slopeDirectionAspect.value.base
  let ellipseValue = $_input.behavior
  let fireHeadingFromNorth = $_output.fireHeadingFromNorth.value.base
  let fireBackingFromNorth = opposite(fireHeadingFromNorth)
  let slope = $_input.slopeSteepnessRatio.value.base
  let upslope = opposite(aspect)
  let windFromNorth = $_input.windDirectionSourceFromNorth.value.base
  let windHeading = opposite(windFromNorth)
  let windSpeed = $_input.windSpeedAtMidflame.value.base
  let wind = {visible: 'visible'}
  let uom = $_input.uomSlate
  let headingValue, flankingValue, backingValue
  let headDist = $_output.headingSpreadDistance.value.base
  let backDist = $_output.backingSpreadDistance.value.base

  // viewport
  const viewbox = "0, 0, 130, 130"
  let vp = {x1: 0, y1: 0, w: 130, h: 130 }
  vp.xc = (vp.x1 + vp.w/2)
  vp.yc = (vp.y1 + vp.h/2)
  vp.x2 = vp.x1 + vp.w
  vp.y2 = vp.y1 + vp.h
  const vpCenter = `translate(${vp.xc}, ${vp.yc})`

  // compass has radius 50 plus margins of 10 for letters
  let compass = {
    r: 50, // compass dial radius
    x: 65,  // compass center x
    y: 65,  // compass center y
    fw: 10, // compass font 'W' width
    major: 10, // major tic length
    minor: 5  // minor tic length
  }
  const center = `translate(${compass.x},${compass.y})`
  const compassPos = `translate(5,5)`
  const points = [
    {deg: 0, text: 'N'},
    {deg: 45, text: 'NE'},
    {deg: 90, text: 'E'},
    {deg: 135, text: 'SE'},
    {deg: 180, text: 'S'},
    {deg: 225, text: 'SW'},
    {deg: 270, text: 'W'},
    {deg: 315, text: 'NW'}
  ]
  points.forEach(p => {
    p.x = atX(compass.x, compass.r+7, p.deg)
    p.y = atY(compass.y, compass.r+7, p.deg)
  })

  // Slope bubble center location
  let bubble = {x: 0, y: 0}
  let fire = {x: 0, r: 35}

  // The following is REQUIRED for units auto-updating
  $: {
    uom = $_input.uomSlate
    slope = $_input.slopeSteepnessRatio.value.base
    aspect = $_input.slopeDirectionAspect.value.base
    upslope = opposite(aspect)

    bubble.xup = atX(compass.x, compass.r-5, upslope)
    bubble.yup = atY(compass.y, compass.r-5, upslope)
    bubble.visible = (slope < 0.01) ? 'hidden' : 'visible'

    windFromNorth = $_input.windDirectionSourceFromNorth.value.base
    windHeading = opposite(windFromNorth)
    windSpeed = $_input.windSpeedAtMidflame.value.base
    wind.xup = atX(compass.x, compass.r-12, windHeading)
    wind.yup = atY(compass.y, compass.r-12, windHeading)
    wind.visible = (windSpeed < 0.1) ? 'hidden' : 'visible'

    fireHeadingFromNorth = $_output.fireHeadingFromNorth.value.base
    fireBackingFromNorth = opposite(fireHeadingFromNorth)
    fire.x = fire.r / $_output.lengthToWidthRatio.value.base
    fire.head = {
      x: atX(compass.x, compass.r-20, fireHeadingFromNorth),
      y: atY(compass.y, compass.r-20, fireHeadingFromNorth)
    }
    fire.back = {
      x: atX(compass.x, compass.r-20, fireBackingFromNorth),
      y: atY(compass.y, compass.r-20, fireBackingFromNorth)
    }
    fire.lwr = $_output.lengthToWidthRatio.value.base
    fire.width = -fire.r / fire.lwr
    fire.flank = {deg: (fireHeadingFromNorth+90)}
    fire.flank.x = atX(compass.x, fire.width, fire.flank.deg),
    fire.flank.y = atY(compass.y, fire.width, fire.flank.deg),
    fire.flank0 = {x: -fire.r, y: width}

    headDist = $_output.headingSpreadDistance.value.base
    backDist = $_output.backingSpreadDistance.value.base
    let radius = (backDist + headDist) / 2
    let ratio = (radius > 0) ? (headDist - radius) / radius : 0
    fire.ign = {
      x: 0,
      y: -fire.r * ratio
    }

    let ellipseValue = $_input.behavior
    if (ellipseValue === 'spreadRate') {
      headingValue = $_output.headingSpreadRate.value[uom].toFixed(0)
      backingValue = $_output.backingSpreadRate.value[uom].toFixed(0)
      flankingValue = $_output.flankingSpreadRate.value[uom].toFixed(0)
    } else if (ellipseValue === 'spreadDistance') {
      headingValue = $_output.headingSpreadDistance.value[uom].toFixed(0)
      backingValue = $_output.backingSpreadDistance.value[uom].toFixed(0)
      flankingValue = $_output.flankingSpreadDistance.value[uom].toFixed(0)
    } else if (ellipseValue === 'flameLength') {
      headingValue = $_output.headingFlameLength.value[uom].toFixed(0)
      backingValue = $_output.backingFlameLength.value[uom].toFixed(0)
      flankingValue = $_output.flankingFlameLength.value[uom].toFixed(0)
    } else if (ellipseValue === 'scorchHeight') {
      headingValue = ($_output.headingScorchHeight.value[uom]).toFixed(0)
      backingValue = ($_output.backingScorchHeight.value[uom]).toFixed(0)
      flankingValue = ($_output.flankingScorchHeight.value[uom]).toFixed(0)
    }
  }
</script>

<svg class="defs-only" xmlns="http://www.w3.org/2000/svg"
    width="0" height="0" style="display: block;">
  <defs>
    <symbol id="fireCompass" >
      <circle r={compass.r} class="compass-face"
        transform='translate({compass.x},{compass.y})'/>
      <!-- markers -->
      {#each points as p}
        <line	class='major-line' y1={compass.r-15} y2={compass.r}	transform='{center} rotate({p.deg})'/>
        <text class='major-text' dominant-baseline="middle" text-anchor="middle"
          x={p.x} y={p.y}>{p.text}</text>
        <line	class='minor-line' y1={compass.r-10} y2={compass.r}	transform='{center} rotate({p.deg+15})'/>
        <line	class='minor-line' y1={compass.r-10} y2={compass.r}	transform='{center} rotate({p.deg+30})'/>
      {/each}
    </symbol>

    <linearGradient id="fireGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
    </linearGradient>

    <!-- fire ellipse -->
    <symbol id='fireEllipse'>
      <g transform='{center} rotate({fireHeadingFromNorth+180})'>
        <!-- fire ellipse -->
        {#each [1, .75, .5, .25] as f}
          <ellipse cx="0" cy={(1-f)*fire.ign.y} rx={f*fire.x} ry={f*fire.r} fill="url(#fireGradient)" />
        {/each}
        <!-- major axis -->
        <line class='minor-line' x1={-fire.r-2} y1="0" x2={fire.r+2} y2="0"
          transform='rotate(90)'/>
        <!-- minor axis -->
        <line class='minor-line' x1={-fire.width+2} y1="0" x2={fire.width-2} y2="0" />
        <!-- ignition point -->
        <circle cx={fire.ign.x} cy={fire.ign.y} r="1" stroke="black" stroke-width=".5" fill="red" />
        <line class='minor-line' x1={fire.ign.x} y1={fire.ign.y}
          x2={-fire.width} y2="0" />
        <line class='minor-line' x1={fire.ign.x} y1={fire.ign.y}
          x2={fire.width} y2="0" />
      </g>
    </symbol>

    <symbol id='fireEllipseText'>
      <text x={fire.head.x} y={fire.head.y} class='compass-text'
          dominant-baseline="middle" text-anchor="middle">
        {headingValue}
      </text>
      <text x={fire.back.x} y={fire.back.y} class='compass-text'
          dominant-baseline="middle" text-anchor="middle">
        {backingValue}
      </text>
      <text x={fire.flank.x} y={fire.flank.y} class='compass-text'
          dominant-baseline="middle" text-anchor="middle">
        {flankingValue}
      </text>
    </symbol>

    <radialGradient id="slopeBubbleGradient"
        cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
      <stop offset="0%" stop-color="white" stop-opacity="0" />
      <stop offset="100%" stop-color="black" stop-opacity=".5" />
    </radialGradient>

    <symbol id='slopeBubble'>
      <g transform='{center} rotate({aspect})'>
        <ellipse cx="0" cy="45" rx='5' ry='5'
          style="visibility:{bubble.visible};"
          fill="url(#slopeBubbleGradient)" />
        <line class='slope-pointer'	y1='48' y2='54'
          style="visibility:{bubble.visible};" />
      </g>
    </symbol>

    <symbol id='slopeBubbleText'>
      <text x={bubble.xup} y={bubble.yup} class='compass-text'
        dominant-baseline="middle" text-anchor="middle"
        style="visibility:{bubble.visible};">
        {(100*slope).toFixed(0)}</text>
    </symbol>

    <linearGradient id="windGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:rgb(200,200,240);stop-opacity:1" />
      <stop offset="100%" style="stop-color:blue;stop-opacity:1" />
    </linearGradient>

    <symbol id='windNeedle'>
      <g transform='{center} rotate({windFromNorth})'>
        <polygon class='wind-needle'
          style="visibility:{wind.visible};"
          fill="url(#windGradient)"
          points="0,44 6,38, 4,38, 4,30, -4,30, -4,38, -6,38" />
          <!-- points="0,42 6,-42 0,-36 -6,-42" /> -->
      </g>
    </symbol>

    <symbol id='windNeedleText'>
      <text x={wind.xup} y={wind.yup} class='compass-text'
        dominant-baseline="middle" text-anchor="middle"
        style="visibility:{wind.visible};">
          {(windSpeed/88).toFixed()}</text>
    </symbol>
  </defs>
</svg>

<div class='row'>
  <div class='col'>
    <div>
      <svg viewBox={viewbox} width='100%' height='100%' >
        <use xlink:href="#fireCompass" transform={compassPos}/>
        <use xlink:href="#slopeBubble" transform={compassPos}/>
        <use xlink:href="#slopeBubbleText" transform={compassPos}/>
        <use xlink:href="#windNeedle" transform={compassPos}/>
        <use xlink:href="#windNeedleText" transform={compassPos}/>
        <use xlink:href="#fireEllipse" transform={compassPos}/>
        <use xlink:href="#fireEllipseText" transform={compassPos}/>
        <use xlink:href="#fireBox" transform='translate(0,0)'/>
      </svg>
    </div>
    <!-- <div class='row'>
      <div class='col-sm-3'></div>
      <div class='col'>
        <BehaviorSelector bind:behavior={$_input.behavior} />
      </div>
    </div> -->
  </div>
</div>

<style>
  /* .firescope-box {
    margin-bottom: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.48);
  } */
  .compass-face {
		stroke: #333;
    stroke-opacity: 50%;
		fill: white;
	}
  .compass-text {
    font: normal 6px sans-serif;
  }
  .info-text {
    font: normal 4px sans-serif;
  }
	.major-line {
		stroke: #111;
		stroke-width: 1;
	}
  .major-text {
    font: bold 8px sans-serif;
  }
	.minor-line {
		stroke: #999;
		stroke-width: 0.5;
	}
	.slope-pointer {
		stroke: #f00;
		stroke-width: 0.5;
	}
</style>
