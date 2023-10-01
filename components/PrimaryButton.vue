<template>
    <NuxtLink :to="props.to" target="_blank" class="cursor-pointer rounded-md transition-colors ease-in-out duration:240 bg-maple-red-600 hover:bg-maple-red-500
  bg-gradient-to-tl from-transparent ring-2 ring-maple-red-600 to-maple-red-800 font-display font-semibold
  px-6 py-3 border border-maple-red-400/75"
  >
    <slot/>
  </NuxtLink>
</template>

<script setup>
const props = defineProps([
  'to'
])
</script>



<style></style>
