<script lang="ts">
  import { sideProjects } from './data/sideProjects'
</script>

<div class="flex flex-wrap gap-4">
  {#each sideProjects as { name, description, image, link, gitRepo, technologies }}
    <div class="sm:w-[500px] m-auto bg-white rounded-lg mt-10 border">
      <div
        class="h-[250px] w-full p-4 bg-cover bg-center rounded-t-lg"
        style="background-image: url({image})"
      />
      <div class="p-4 flex flex-col justify-between">
        <div class="flex flex-col items-center">
          <p class="text-gray-800 text-center text-lg mt-2">{name}</p>
          <p class="text-gray-600 font-light text-sm text-center mt-2">
            {@html description}
          </p>
        </div>
        <div class="flex mt-8 justify-center">
          {#if link}
            <a href={link} target="_blank" class="px-6">
              <img src="Link-Symbol-32px.png" alt="github repo" class="mx-auto" />
              <span class="font-bold uppercase text-xs text-black">Demo</span>
            </a>
          {/if}
          <a href={gitRepo} target="_blank" class="px-6">
            <img src="GitHub-Mark-32px.png" alt="github repo" class="mx-auto" />
            <span class="font-bold uppercase text-xs text-black">Repo</span>
          </a>
        </div>
      </div>
    </div>
  {/each}
</div>
