<script lang="ts">
  import Timeline from './lib/Timeline.svelte'
  import Skills from './lib/Skills.svelte'
</script>

<main>
  <div class="w-screen md:container mx-auto my-6 px-4 py-6 font-OpenSans">
    <div class="w-full md:max-w-6xl mx-auto">

      <article>
        <h1 class="text-6xl md:text-xl8 mb-20 text-center">Eliel Niukkanen</h1>
        <div class="flex justify-center">
          <div class="relative">
            <img src="eliel.jpg" alt="Eliel" class="rounded-full" />
            <img class="absolute right-0 bottom-0 h-36 w-36" src="aws_cert.png">
          </div>
        </div>
      </article>

      <article class="mb-4 mt-20">
        <h2 class="text-3xl text-center">A short summary</h2>
        <div class="columns-2xs mt-8">
          <p class="mb-4">
            I am a make-it-happen guy with wide knowledge in Web Development and Cloud
            technologies.
            I am a Experienced Application Specialist with a demonstrated history of working
            with many different projects and tools.
          </p>
          <p class="mb-4">
            I'm skilled in Web Development and Cloud, using multiple different languages and frameworks.
            Usually I'm the guy who gets integrations working
            Python (Programming Language),  Django, RESTful API and GraphQL
            My special interest areas are big and messy datasets, reproducible research, and
            network troubleshooting using statistical and machine learning methods.
          </p>
          <p class="mb-4">
            Learning things is what drives me — I believe that there is always room for
            improvement, especially with regards to my own abilities, and I constantly seek
            to sharpen my skills.
          </p>
          <p class="mb-4">
            TODO:
            - In my work I aim for simplicity and results
            - Koodauksessa: Yksinkertaisuus, Selkeys, luettavuus ja muutettavuus
            - I studied and worked in field of biology but now I have come to realize that my true passion lies in software development.
            - Tehnyt in house kehitystä sekä konsultointia isoille ja pienille yrityksille jotka toimivar suomessa sekä ulkomailla
          </p>
        </div>
      </article>

      <article class="mb-4 mt-20">
        <h2 class="text-3xl text-center">Project Timeline</h2>
        <div class="flex justify-center">
          <Timeline />
        </div>
      </article>

      <article class="mb-4 mt-20">
        <h2 class="text-3xl text-center">Skills</h2>
          <Skills />
      </article>

      <article class="mb-4 mt-20">
        <h2 class="text-3xl text-center">Hobby projects</h2>

      </article>
    </div>
  </div>
</main>
