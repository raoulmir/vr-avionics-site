<template>
    <div class="bg-maple-red-600">
        <AppHeader>
            <nav
                class="sticky top-0 z-50 backdrop-blur-md bg-maple-red-600/50 h-16 pr-4 flex items-center justify-between md:divide-x divide-rose-50 border-b-4 border-b-maple-red-900/40">
                <!-- Website Logo (Left) -->
                <div class="flex items-center gap-3
                 bg-slate-100 border-b-4 border-r border-r-slate-400/75 border-slate-900/75 rounded-tr-full
                pr-10 px-5 md:px-20  shrink-0">
                    <img src="/img/logo.svg" alt="Website Logo" class="h-16 w-16">
                    <div class="text flex-col text-maple-red-700 text-md hidden md:flex">
                        <span class="font-semibold -mb-2 font-display">VR Canada</span>
                        <span>Avionics</span>
                    </div>

                </div>

                <!-- Navigation Links (Right) -->
                <div class="space-x-4 flex">
                    <a href="mailto:maurits@vravionics.com"
                        class="text-white hover:text-gray-300 ml-5 flex gap-1 tracking-wider">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 h-5 mt-1">
                            <path
                                d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path
                                d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>


                        <span class="hidden min-[375px]:block">Contact</span>
                    </a>
                    <a href="https://www.youtube.com/@zubtf/videos"
                        class="text-white hover:text-gray-300 flex gap-1 tracking-wider">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 h-5 mt-1">
                            <path
                                d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                        </svg>


                        <span class="hidden min-[375px]:block">Youtube</span>

                    </a>
                </div>
            </nav>
        </AppHeader>
        <slot />
    </div>
    <AppFooter class="flex flex-col md:flex-row justify-between gap-2 m-4">
        <div class="contact flex-col">
            <div class="flex gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-5 mt-1">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path
                        d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <p>maurits@vravionics.com</p>
            </div>
            <div class="flex gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-5 mt-1">
                    <path fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd" />
                </svg>
                <p>+1 403 671 9114</p>
            </div>

        </div>

        <p>Copyright © 2025 VR Canada Avionics Inc.</p>
    </AppFooter>
</template>
