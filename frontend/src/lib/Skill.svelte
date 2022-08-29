<script lang="ts">
  import type { Skill } from './types'

  export let skill: Skill

  const skillId = skill.name.replace(/\s/g, '-')
</script>

<div class="flex mb-1 mt-4 h-10">
  <div class="flex flex-col justify-center w-32 mr-2">
    <p class="text-gray-800">{skill.name}</p>
  </div>
  <div class="grow flex flex-col justify-center mt-1">
    <svg class="h-5 w-full">
      <rect
        width="calc(100% - 4px)"
        x="2"
        y="1"
        height="15"
        rx="3"
        fill="rgb(0 112 169)"
        opacity="0.2"
      />
      <rect
        width="calc({skill.level}% - 4px)"
        x="2"
        y="1"
        height="15"
        rx="3"
        fill="rgb(0 112 169)"
        clip-path="url(#skill-level-{skillId})"
      />
    </svg>
  </div>
</div>
