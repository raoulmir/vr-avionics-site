<template>
  <lite-youtube class="h-96 w-auto" :videoid="props.videoId"
    params="controls=1&modestbranding=1&rel=0&enablejsapi=1"></lite-youtube>
</template>

<script lang="ts" setup>
  const props = defineProps([
    'videoId'
  ])
</script>
