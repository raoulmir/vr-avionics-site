<template>
  <div class="group bg-cover bg-center h-72 rounded-lg border border-gray-800 drop-shadow-md" :style="{ 'background-image': 'url(' + thumbnailSrc + ')' }">
    <div class="bg-black bg-opacity-30 rounded-lg  h-full flex flex-col justify-end">
      <!-- <div
        class="divier bg-gradient-to-l from-maple-red-600 from-20% via-maple-red-400 via-30% to-maple-red-700 to-50% opacity-80 -mb-1  h-1 w-full">
      </div> -->
      <div class="
      transition-height delay-75 h-32 duration-240 ease-in group-hover:h-3/4
      backdrop-blur-md bg-slate-600/40 container p-4 rounded-b-lg border-t-2 border-slate-400/30 flex gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          class="w-6 h-6 mt-1 text-maple-red-600 group-hover:text-white transition-colors duration-300">
          <path fillRule="evenodd"
            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
            clipRule="evenodd" />
        </svg>


        <div class="text-container">
          <h2 class="text-white text-2xl font-semibold mb-2">{{ title }}</h2>
          <p class="text-gray-300">{{ description }}</p>
        </div>

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
