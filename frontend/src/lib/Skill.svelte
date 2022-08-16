<script lang="ts">
  import type { Skill } from './types'

  export let skill: Skill

  const skillId = skill.name.replace(/\s/g, "-")
</script>
<div class="flex mb-1 mt-4 h-10">
    <div class="flex flex-col justify-center w-32 mr-2">
        <p>{skill.name} </p>
    </div>
    <div class="grow flex flex-col justify-center mt-1">
        <svg class="h-4 w-full">
            <defs>
                <clipPath id="skill-level-{skillId}">
                    <rect width="{skill.level}%"
                          height="100%"
                    />
                </clipPath>
            </defs>
            <rect
                width="calc(100% - 4px)"
                x="2"
                y="1"
                height="12"
                rx="6"
                class="fill-sky-600"
                clip-path="url(#skill-level-{skillId})"
            />
            <rect
                width="calc(100% - 4px)"
                x="2"
                y="1"
                height="12px"
                rx="6"
                stroke-width="2px"
                class="stroke-sky-600 fill-transparent"
            />
        </svg>
    </div>
</div>


