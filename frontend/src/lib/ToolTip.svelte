<style>
  .tooltip {
    max-width: 400px;
    min-width: 200px;
    transform: translate(-50%, 0);
    padding: 20px;
    color: #666666;
    background-color: #eeeeee;
    font-weight: normal;
    font-size: 13px;
    border-radius: 8px;
    position: absolute;
    z-index: 99999999;
    box-sizing: border-box;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
  }

  .tooltip i {
    position: absolute;
    bottom: 100%;
    width: 24px;
    height: 12px;
    overflow: hidden;
  }

  .tooltip i::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    left: 50%;
    transform: translate(-50%, 50%) rotate(45deg);
    background-color: #eeeeee;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
  }
</style>

<script lang="ts">
  import type { ToolTipType } from './types'

  interface ToolTipPosition {
    x: number
    arrowX: number
  }

  export let toolTip: ToolTipType
  export let maxWidth: number

  function getToolTipPosition(
    width: number,
    maxWidth: number,
    { x }: ToolTipType
  ): ToolTipPosition {
    const center = width / 2
    const maxX = maxWidth - center

    if (x < center) return { x: center, arrowX: x }
    if (x > maxX) return { x: maxX, arrowX: x - maxX + center }
    return { x, arrowX: center }
  }

  $: width = 0
  $: toolTipPosition = getToolTipPosition(width, maxWidth, toolTip)
</script>

<div
  bind:clientWidth={width}
  class="absolute tooltip"
  style="top: {toolTip.y + 5}px; left: {toolTipPosition.x}px"
>
  {#if width}
    <h3 class="font-bold text" style="color: {toolTip.color}">{toolTip.name}</h3>
    <p>{toolTip.description}</p>
    <i style="left: {toolTipPosition.arrowX}px" />
  {/if}
</div>
