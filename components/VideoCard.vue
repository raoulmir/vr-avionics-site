<template>
   <div class="bg-cover bg-center h-72 rounded-lg"
    :style="{'background-image': 'url(' +  thumbnailSrc + ')'}">
    <div class="bg-black bg-opacity-30 rounded-lg  h-full flex flex-col justify-end">
      <!-- <div
        class="divier bg-gradient-to-l from-maple-red-600 from-20% via-maple-red-400 via-30% to-maple-red-700 to-50% opacity-80 -mb-1  h-1 w-full">
      </div> -->
      <div class="relative w-full backdrop-blur-md container p-4 rounded-b-lg border-t-2 border-slate-400/20 ">
        <h2 class="text-white text-2xl font-semibold mb-2">{{ title }}</h2>
        <p class="text-gray-300">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps([
  'title', 
  'description',
  'thumbnailSrc'
])


</script>



<style></style>
