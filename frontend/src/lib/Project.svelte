<script lang="ts">
  import type { Project, ToolTipType } from './types'

  export let project: Project
  export let xScale
  export let setToolTip: (toolTip?: ToolTipType) => void
  export let y
  export let chartWidth

  const descriptionHeight = 70
  const descriptionWidth = 300
  const barHeight = 15
  const barY = y + descriptionHeight + barHeight

  const { start, end, name, color, roles, devType, tech, description } = project

  let isHovered = false

  function handleOnMouseOver() {
    isHovered = true
    setToolTip({
      name,
      color,
      description,
      y: barY + 25,
      x: x + width / 2
    })
  }

  function handleOnMouseLeave() {
    isHovered = false
    setToolTip(undefined)
  }

  $: x = xScale(start)
  $: width = xScale(end) - x
  $: descriptionMaxX = chartWidth - descriptionWidth
  $: descriptionX = x > descriptionMaxX ? descriptionMaxX : x
</script>

<!--Description-->
<g>
  <foreignObject
    x={Math.min(descriptionMaxX, x)}
    y={y + 5}
    width={descriptionWidth}
    height={descriptionHeight}
  >
    <div class="flex flex-col justify-end h-full text-xs">
      <p class="font-bold text-sm">{name}</p>
      <div class="mt-1">
        <p><span class="font-bold mr-2">Role:</span>{roles.join(', ')} ({devType})</p>
        <div class="flex justify-start">
          <span class="font-bold mr-2">Technology</span>
          <span>{tech.join(', ')}</span>
        </div>
      </div>
    </div>
  </foreignObject>
</g>

<!--Line-->
<line
  x1={0}
  y1={barY + barHeight / 2}
  x2={chartWidth}
  y2={barY + barHeight / 2}
  stroke="#d1d5db"
  stroke-dasharray="2"
/>

<!--Bar-->
<rect {x} y={barY} {width} height={barHeight} fill={color} rx="3" />

<!--Hover Area-->
<rect
  x={0}
  {y}
  width={chartWidth}
  height={descriptionHeight + barHeight + 20}
  opacity={0}
  on:mouseover={handleOnMouseOver}
  on:focus={handleOnMouseOver}
  on:mouseleave={handleOnMouseLeave}
/>
