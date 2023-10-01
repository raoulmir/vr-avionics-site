<template>
<div class="group bg-cover bg-center hover:scale-105 transition-transform hover:z-40 image rounded-lg border border-gray-800 drop-shadow-md relative" :style="{ 'background-image': 'url(' + thumbnailSrc + ')' }">
    <div class="rounded-lg h-full flex flex-col justify-center items-center" :class="title ? 'bg-black/50 md:bg-transparent md:hover:bg-black/50 ' : ''">
        <div class=" container p-4 flex flex-col gap-4">
            <div class="text-container text-center">
                <h2 class="text-white text-lg font-semibold mb-2 md:opacity-0 md:group-hover:opacity-100">{{ title }}</h2>
            </div>
        </div>
    </div>
</div>

</template>

<script setup>

const props = defineProps([
  'title',
  'thumbnailSrc'
])


</script>



<style>
.image {
  min-height: 286px
}
</style>
