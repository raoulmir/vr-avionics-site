<template>
    <div class="h-screen divide-y divide-slate-200">
        <section class="hero-banner h-1/2 text-white relative ">
            <!-- Overlaying Header Text -->
            <div class="bg-gradient-to-tr from-neutral-950 to-transparent absolute inset-0 flex items-center pl-20">
                <div class="hero-container flex flex-col items-start gap-5 mb-10">
                    <h1 class="font-display text-4xl font-bold tracking-wider">
                        VR Canada Avionics - <br>
                        Your plane was <span
                            class="bg-clip-text text-transparent bg-gradient-to-l from-maple-red-500 via-rose-600 to-maple-red-800">meant
                            to fly.</span>
                    </h1>
                    <p class="font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Dolorum consectetur
                        aliquam reiciendis
                        libero. Velit, cupiditate.</p>
                    <div class="button-container flex justify-end w-full gap-4">
                        <PrimaryButton>REACH OUT</PrimaryButton>
                        <PrimaryButton>OUR PARTNER</PrimaryButton>
                    </div>

                </div>

            </div>
        </section>
        <article class="h-auto py-10 bg-white text-slate-700">
            <div class="flex items-center justify-center flex-col">
                <h1 class="text-4xl font-bold text-center mt-8 font-display">
                    Who are we
                </h1>
                <p class="py-5 max-w-md text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                    perspiciatis sapiente quae eum veniam libero amet, placeat quam aperiam quasi dolorem eaque, deleniti
                    corrupti est voluptates sequi corporis illum nemo.</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="w-6 h-6 animate-bounce">
                    <path fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clipRule="evenodd" />
                </svg>

            </div>
        </article>
        <article class="h-auto py-10 bg-gradient-to-tr from-slate-900 to-slate-700 text-white">
            <div class="flex items-center justify-center flex-col ">
                <h1 class="text-4xl font-bold text-center font-display tracking-wider">
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
        <article class="h-auto py-10 bg-gradient-to-b from-slate-100 to-slate-900/10 text-slate-800">
            <div class="flex items-center justify-center flex-col ">
                <h1 class="text-4xl font-bold text-center font-display tracking-wider">
                    Some of our work
                </h1>

                <div class="container mx-auto py-8">
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1">

                        <GalleryImage class="col-span-2"
                            thumbnail-src="https://static.garmincdn.com/gdc/Landing-Pages/Aviation/44290-Aviation%20Government%20and%20Defense%20Landing%20Page/44290-hero-desktop.jpg"
                            title="Lorem ipsum dolor sit." />

                        <GalleryImage
                            thumbnail-src="https://static.garmincdn.com/gdc/Landing-Pages/Aviation/34390-G5000-upgrade-phase-2/34390-hero-desktop.jpg"
                            title="Lorem ipsum dolor sit amet." />

                        <GalleryImage class="row-span-2"
                            thumbnail-src="https://static.garmincdn.com/gdc/Landing-Pages/Aviation/44290-Aviation%20Government%20and%20Defense%20Landing%20Page/44290-hero-desktop.jpg"
                            title="Lorem, ipsum dolor." />

                        <GalleryImage class="row-span-2"
                            thumbnail-src="https://static.garmincdn.com/gdc/Landing-Pages/Aviation/34390-G5000-upgrade-phase-2/34390-hero-desktop.jpg"
                            title="Lorem, ipsum dolor." />


                        <GalleryImage
                            thumbnail-src="https://static.garmincdn.com/gdc/market-pages/banners/in-the-air/2021/business-aviation/1600x455/business-Garmin-Autoland-1600x455.jpg"
                            title="Lorem ipsum dolor sit." />

                        <GalleryImage
                            thumbnail-src="https://static.garmincdn.com/gdc/Landing-Pages/Aviation/34390-G5000-upgrade-phase-2/34390-hero-desktop.jpg"
                            title="Lorem ipsum dolor sit amet." />
                        <GalleryImage class="col-span-2"
                            thumbnail-src="https://static.garmincdn.com/gdc/market-pages/banners/in-the-air/2021/business-aviation/1600x455/business-Garmin-Autoland-1600x455.jpg"
                            title="Lorem, ipsum dolor." />


                        <GalleryImage
                            thumbnail-src="https://static.garmincdn.com/gdc/Landing-Pages/Aviation/44290-Aviation%20Government%20and%20Defense%20Landing%20Page/44290-hero-desktop.jpg"
                            title="Lorem ipsum dolor sit." />

                    </div>
                </div>
            </div>
        </article>
    </div>
</template>
<script>

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