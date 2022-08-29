<script lang="ts">
  import skillsByCategory from './data/skills'
  import Skill from './Skill.svelte'

  enum Order {
    Category = 'Category',
    Descending = 'Descending'
  }

  const skillsOrderByDesc = skillsByCategory
    .flatMap(({ skills }) => skills)
    .sort((skillA, skillB) => skillB.level - skillA.level)

  let selectedOrder = Order.Category
</script>

<div class="mt-8 flex justify-center">
  <span class="mr-4">Order by:</span>
  {#each Object.values(Order) as order}
    <label class="mr-4">
      <input type="radio" bind:group={selectedOrder} name="order" value={order} />
      {order}
    </label>
  {/each}
</div>

{#if selectedOrder === Order.Category}
  <div class="flex flex-wrap justify-between mt-8 w-full">
    {#each skillsByCategory as skillCategory}
      <div class="flex-initial w-80 mx-6 mt-6">
        <strong>{skillCategory.category}</strong>
        {#each skillCategory.skills as skill}
          <Skill {skill} />
        {/each}
      </div>
    {/each}
  </div>
{/if}

{#if selectedOrder === Order.Descending}
  <div class="flex justify-center mt-8 w-full">
    <div>
      {#each skillsOrderByDesc as skill}
        <div class="w-80 mx-6">
          <Skill {skill} />
        </div>
      {/each}
    </div>
  </div>
{/if}
