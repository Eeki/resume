<script lang="ts">
  import Timeline from './lib/Timeline.svelte'
  import Skills from './lib/Skills.svelte'
  import SideProjects from './lib/SideProjects.svelte'
</script>

<main>
  <div class="w-screen md:container mx-auto my-6 px-4 py-6 font-OpenSans">
    <div class="w-full md:max-w-6xl mx-auto">
      <article>
        <h1 class="text-6xl md:text-xl8 mb-20 text-center">Eliel Niukkanen</h1>
        <div class="flex justify-center">
          <div class="relative">
            <img src="eliel.jpg" alt="Eliel" class="rounded-full" />
            <img
              src="aws-cert.png"
              alt="aws-cert"
              class="absolute right-0 bottom-0 h-[6.5rem] w-[6.5rem] sm:h-36 sm:w-36"
            />
          </div>
        </div>
      </article>

      <article class="mt-20">
        <h2 class="text-3xl text-center">A short summary</h2>
        <div class="columns-2xs mt-8">
          <p class="mb-4 text-gray-800">
            I am a make-it-happen guy with wide knowledge in web development and
            cloud technologies with a demonstrated history of working with many
            different projects and tools.
          </p>
          <p class="mb-4 text-gray-800">
            Learning things is what drives me — I believe that there is always room
            for improvement, especially with regards to my own abilities,
            and I constantly seek to sharpen my skills.
          </p>
          <p class="mb-4 text-gray-800">
            In my work I aim for simplicity, maintainability and results.
            Honesty, transparency and failing early
            are my core values that have served me well in my career with customers from
            small and big companies in Finland and abroad.
          </p>
          <p class="mb-4 text-gray-800">
            I studied and worked in the field of biology but after CS studies
            I have come to realize that my true passion lies in software development.
          </p>
        </div>
      </article>

      <article class="mt-20">
        <h2 class="text-3xl text-center">Project Timeline</h2>
        <div class="flex justify-center">
          <Timeline />
        </div>
      </article>

      <article class="mt-20">
        <h2 class="text-3xl text-center">Skills</h2>
        <Skills />
      </article>

      <article class="mt-20">
        <h2 class="text-3xl text-center">Side projects</h2>
        <SideProjects />
      </article>
    </div>
  </div>
</main>
