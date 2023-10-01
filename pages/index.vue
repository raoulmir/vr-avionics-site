<template>
    <USlideover v-model="isOpen">
        <UCard class="flex flex-col flex-1"
            :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <div class="contact flex flex-col m-5 gap-10">
                <NuxtLink to="mailto:maurits@vravionics.com"
                    class="flex gap-1 text-3xl pb-2 px-2 hover:text-black hover:bg-slate-50 transition-colors rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-5 mt-3">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path
                            d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    <p>maurits@vravionics.com</p>
                </NuxtLink>
                <NuxtLink to="tel:+14036719114"
                    class="flex gap-1 text-3xl pb-2 px-2 hover:text-black hover:bg-slate-50 transition-colors rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-5 mt-3">
                        <path fillRule="evenodd"
                            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                            clipRule="evenodd" />
                    </svg>
                    <p>+1 403 671 9114</p>
                </NuxtLink>
            </div>
            <template #header>
                <div class="flex items-center justify-between">
                    <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                        Contact
                    </h3>
                    <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                        @click="isOpen = false" />
                </div>
            </template>
        </UCard>

    </USlideover>

    <div class="divide-y divide-slate-200">
        <section
            class="bg-[url(/img/hero-banner.JPG)] bg-cover bg-center h-[50vh] text-white relative selection:bg-maple-red-100">
            <div
                class="bg-gradient-to-tr from-neutral-950 via-transparent to-neutral-950 to-90% absolute inset-0 flex items-center md:pl-20 ">
                <div class="hero-container flex flex-col gap-5 m-5 mb-10 text-center md:text-left">
                    <h1 class="text-balance font-display text-3xl md:text-4xl font-bold tracking-wider subpixel-antialiased">
                        VR Canada Avionics - <br>
                        Your plane was <span
                            class="bg-clip-text text-transparent bg-gradient-to-l from-maple-red-500 via-rose-600 to-maple-red-800">meant
                            to fly.</span>
                    </h1>
                    <p>Update your instrument panel to the latest tech <br>
                        While you keep flying — no more years of down-time.</p>
                    <div class="button-container flex justify-center md:justify-end w-full gap-4">
                        <PrimaryButton @click="isOpen = true">REACH OUT</PrimaryButton>
                        <SecondaryButton to="https://vravionics.com/">OUR PARTNER</SecondaryButton>
                    </div>

                </div>

            </div>
        </section>
        <article class="h-auto py-10 bg-white text-slate-700 selection:bg-maple-red-100">
            <div class="flex items-center justify-center flex-col m-5">
                <h1 class="text-4xl font-bold text-center mt-8 font-display subpixel-antialiased">
                    Who are we
                </h1>
                <p class="py-5 max-w-3xl text-center">Your premier destination for cutting-edge avionics solutions. We
                    specialize in the design and installation of instrument panels and harnesses
                    using advanced CAD software. What sets us apart is our unique approach—we build each unit separately in
                    our state-of-the-art facility to ensure precision and quality, with 30+ years of experience to back it.
                    This allows for a seamless and quick installation process, minimizing downtime for your aircraft (~1
                    Month). Experience innovation and efficiency with VR Canada Avionics — where avionics
                    meets excellence.</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="w-6 h-6 animate-bounce">
                    <path fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clipRule="evenodd" />
                </svg>

            </div>
        </article>
        <article class="h-auto py-10 bg-gradient-to-tr from-slate-900 to-slate-700 text-white">
            <div class="flex items-center justify-center flex-col m-5">
                <h1
                    class="text-4xl font-bold text-center font-display tracking-wider selection:bg-maple-red-100 subpixel-antialiased">
                    Videos
                </h1>

                <div class="container mx-auto py-8">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        <VideoCard thumbnail-src="https://i.ytimg.com/vi/f8omFMpV-EE/sddefault.jpg"
                            title="VR Avionics -FSM -Auto Fuel leveling"
                            description="Auto fuel leveling in a Lancair IVPT Jet-prop. Due to a typical high fuel flow burn rate of 33 US  G/h plus and coupled to the all wet wing make this solution very nice to provide a low pilot work load in this high performance aircraft.\n\ncheck out :\n\nhttp://vravionics.com/fsm.htm"
                            videoId="f8omFMpV-EE" />

                        <VideoCard thumbnail-src="https://i.ytimg.com/vi/lcXCUQPT5aY/sddefault.jpg"
                            title="Startup of N351BG"
                            description="this video shows the startup from outside and inside with John Cook at the controls"
                            videoId="lcXCUQPT5aY" />

                        <VideoCard thumbnail-src="https://i.ytimg.com/vi/CqEfHXsRTbA/hqdefault.jpg"
                            title="Compilation of ouside inside N351BG"
                            description="John Cook test flying Bill Gayle's Lancair Jet prop in November 2016"
                            videoId="CqEfHXsRTbA" />
                    </div>
                </div>
            </div>
        </article>
        <article class="h-auto py-10 bg-gradient-to-b from-slate-100 to-neutral-100 text-slate-800">
            <div class="flex items-center justify-center flex-col ">
                <h1
                    class="text-4xl font-bold text-center font-display selection:bg-maple-red-100 subpixel-antialiased">
                    Some of our work
                </h1>

                <div class="container mx-auto py-8">
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 m-5">

                        <GalleryImage class="col-span-2" thumbnail-src="/img/gallery/A-B-1.jpg"
                            title="Installed and tested in your plane within avg. of 1 month" />

                        <GalleryImage thumbnail-src="/img/gallery/C-1.jpg" />

                        <GalleryImage class="md:row-span-2" thumbnail-src="/img/gallery/D-1-2.jpg"
                            title="Many years of experience, giving you peace of mind and confidence in our expertise" />

                        <GalleryImage class="md:row-span-2" thumbnail-src="/img/gallery/A-2-3.jpg" />


                        <GalleryImage thumbnail-src="/img/gallery/B-2.jpg" title="State of the art wire harnesses" />

                        <GalleryImage thumbnail-src="/img/gallery/C-2.jpg" title="Maticulously tested" />

                        <GalleryImage class="md:col-span-2" thumbnail-src="/img/gallery/B-C-3.jpg"
                            title="Modeled, planned and designed with CAD software ahead of time" />


                        <GalleryImage class="col-span-2 md:col-span-1" thumbnail-src="/img/gallery/D-3.jpg" />

                    </div>
                </div>
            </div>
        </article>
    </div>
</template>
<script setup>
const isOpen = ref(false)

definePageMeta({
    layout: "default",
});
</script>
<style>
/* Additional CSS for the hero banner */
.text-balance {
    text-wrap: balance;
}
</style>