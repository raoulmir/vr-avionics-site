<template>
    <div class="h-screen divide-y divide-slate-200">
        <section class="hero-banner h-1/3 text-white relative ">
            <!-- Overlaying Header Text -->
            <div class="bg-gradient-to-tr from-neutral-950 to-transparent absolute inset-0 flex items-center pl-20">
                <div class="hero-container flex flex-col items-start gap-5">
                    <h1 class="text-4xl font-bold">
                        <!-- <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">VR Avionics</span> - <br>
                    Your plane was meant to fly. -->
                        VR Avionics - <br>
                        Your plane was <span
                            class="bg-clip-text text-transparent bg-gradient-to-l from-maple-red-500 via-rose-600 to-maple-red-800">meant
                            to fly.</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Dolorum consectetur aliquam reiciendis
                        libero. Velit, cupiditate.</p>
                    <div class="button-container flex justify-end w-full gap-4">
                        <PrimaryButton>REACH OUT</PrimaryButton>
                        <PrimaryButton>OUR PARTNER</PrimaryButton>
                    </div>

                </div>

            </div>
        </section>
        <article class="h-auto py-10">
            <div class="flex items-center justify-center pl-20 flex-col">
                <h1 class="text-4xl font-bold text-center">
                    Lorem, ipsum.
                </h1>
                <p class="py-5 max-w-md text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                    perspiciatis sapiente quae eum veniam libero amet, placeat quam aperiam quasi dolorem eaque, deleniti
                    corrupti est voluptates sequi corporis illum nemo.</p>
            </div>
        </article>
        <article class="h-auto py-10">
            <div class="flex items-center justify-center pl-20 flex-col">
                <h1 class="text-4xl font-bold text-center">
                    Videos
                </h1>

                <div class="container mx-auto py-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <VideoCard
                            thumbnail-src="https://static.garmincdn.com/gdc/Landing-Pages/Aviation/44290-Aviation%20Government%20and%20Defense%20Landing%20Page/44290-hero-desktop.jpg"
                            title="Video Title 1" description="Description of Video 1." />

                        <VideoCard
                            thumbnail-src="https://static.garmincdn.com/gdc/market-pages/banners/in-the-air/2021/business-aviation/1600x455/business-Garmin-Autoland-1600x455.jpg"
                            title="Video Title 2" description="Description of Video 2." />

                        <VideoCard
                            thumbnail-src="https://static.garmincdn.com/gdc/Landing-Pages/Aviation/34390-G5000-upgrade-phase-2/34390-hero-desktop.jpg"
                            title="Video Title 3" description="Description of Video 3." />
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>
<script>
// import { PrimaryButton } from '#build/components';

// This will work in both `<script setup>` and `<script>`
definePageMeta({
    layout: "default",
});
</script>
<style>
/* Additional CSS for the hero banner */
.hero-banner {
    background-image: url('https://static.garmincdn.com/gdc/home-page/banners/Homepage-and-Subcat-banner-DESKTOP-33562-33563-33570-33572-33573.jpg');
    background-size: cover;
    background-position: center center;
}

.backdrop-filter {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
}
</style>