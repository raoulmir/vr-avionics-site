<template>
    <div>
        <AppHeader>
            <nav class="bg-maple-red-600 h-16 p-4 flex items-center justify-between divide-x divide-rose-50 border-b-4 border-b-maple-red-900/40">
                <!-- Website Logo (Left) -->
                <div class="flex items-center">
                    <img src="img/logo.svg" alt="Website Logo" class="h-16 w-16 mr-2">
                    <span class="text-white text-xl font-semibold">VR Avionics</span>
                </div>

                <!-- Navigation Links (Right) -->
                <div class="space-x-4">
                    <a href="#" class="text-white hover:text-gray-300 ml-5">About Us</a>
                    <a href="#" class="text-white hover:text-gray-300">Contact</a>
                </div>
            </nav>
        </AppHeader>
        <slot />
        <AppFooter>
            <!-- <p class="text-center">Copyright © 2023 VR Avionics</p> -->
        </AppFooter>
    </div>
</template>
