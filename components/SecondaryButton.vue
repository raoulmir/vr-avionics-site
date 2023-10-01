<template>
    <NuxtLink :to="props.to" target="_blank" class="cursor-pointer rounded-md transition-colors ease-in-out duration:240 bg-slate-600 hover:bg-slate-500
  bg-gradient-to-tl from-transparent to-slate-800 font-semibold ring-2 ring-slate-800
  px-6 py-3 border border-slate-700/75 font-display"
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
