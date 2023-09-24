<template>
    <div class="bg-maple-red-600">
        <AppHeader>
            <nav
                class="sticky top-0 z-10 backdrop-blur-md bg-maple-red-600/50 h-16 p-4 flex items-center justify-between divide-x divide-rose-50 border-b-4 border-b-maple-red-900/40">
                <!-- Website Logo (Left) -->
                <div class="flex items-center">
                    <img src="img/logo.svg" alt="Website Logo" class="h-16 w-16 mr-2">
                    <span class="text-white text-xl font-semibold">VR Avionics</span>
                </div>

                <!-- Navigation Links (Right) -->
                <div class="space-x-4 flex">
                    <a href="#" class="text-white hover:text-gray-300 ml-5 flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 h-5 mt-1">
                            <path
                                d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path
                                d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>


                        Contact
                    </a>
                    <a href="#" class="text-white hover:text-gray-300 flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-5 mt-1">
                            <path
                                d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                        </svg>


                        Youtube

                    </a>
                </div>
            </nav>
        </AppHeader>
        <slot />
        <AppFooter>
            <!-- <p class="text-center">Copyright © 2023 VR Avionics</p> -->
    </AppFooter>
</div></template>
