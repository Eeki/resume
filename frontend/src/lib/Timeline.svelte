<script lang="ts">
  import { scaleTime } from 'd3-scale'
  import { axisBottom } from 'd3-axis'
  import { select } from 'd3-selection'
  import { timeYear } from 'd3-time'
  import Project from './Project.svelte'
  import ToolTip from './ToolTip.svelte'
  import projects from './data/projecs'

  import type { ToolTipType } from './types'

  let xAxisEl
  let toolTip: ToolTipType | undefined

  function setToolTip(_toolTip?: ToolTipType) {
    toolTip = _toolTip
  }

  const xAxisHeight = 40
  const projectHeight = 110
  const xMargin = 12
  const height = projects.length * projectHeight + xAxisHeight

  $: width = 0
  $: xMin = Math.min.apply(
    null,
    projects.map(({ start }) => start)
  )
  $: xMax = Math.max.apply(
    null,
    projects.map(({ end }) => end)
  )
  $: xScale = scaleTime()
    .domain([xMin, xMax])
    .range([xMargin, width - xMargin])
    .nice()
  $: xAxis = axisBottom(xScale).ticks(timeYear.every(1))
  $: {
    select(xAxisEl).call(xAxis)
  }
</script>

<div class="relative w-full" bind:clientWidth={width}>
  <svg viewBox={`0 0 ${width} ${height}`}>
    {#if width}
      <g bind:this={xAxisEl} transform={`translate(0,${height - xAxisHeight})`} />
      <g transform={`translate(${xMargin},0)`}>
        {#each projects as project, i}
          <Project
            {project}
            {xScale}
            {setToolTip}
            y={i * projectHeight}
            chartWidth={width - xMargin * 2}
          />
        {/each}
      </g>
    {/if}
  </svg>

  <!--Tooltip-->
  <div class="absolute top-0 left-0 bottom-0 right-0 pointer-events-none">
    {#if toolTip}
      <ToolTip {toolTip} maxWidth={width} />
    {/if}
  </div>
</div>
