<script setup lang="ts">
</script>

<template>
  <section
    id="inicio"
    class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
  >
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-rose-50 via-amber-50 to-pink-50" />
    <div class="absolute top-20 left-10 w-72 h-72 bg-rose-200/40 rounded-full blur-3xl animate-pulse" />
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;" />

    <!-- Floating emojis -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <span class="absolute text-4xl top-[15%] left-[10%] animate-bounce" style="animation-duration: 3s;">🧁</span>
      <span class="absolute text-3xl top-[25%] right-[15%] animate-bounce" style="animation-duration: 4s; animation-delay: 0.5s;">🍰</span>
      <span class="absolute text-4xl bottom-[20%] left-[20%] animate-bounce" style="animation-duration: 3.5s; animation-delay: 1s;">🍫</span>
      <span class="absolute text-3xl bottom-[30%] right-[10%] animate-bounce" style="animation-duration: 4.5s; animation-delay: 1.5s;">🍬</span>
      <span class="absolute text-2xl top-[40%] left-[5%] animate-bounce" style="animation-duration: 5s; animation-delay: 0.8s;">🎂</span>
      <span class="absolute text-3xl top-[10%] right-[30%] animate-bounce" style="animation-duration: 3.8s; animation-delay: 2s;">🍩</span>
    </div>

    <!-- Content -->
    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <div class="inline-block mb-6 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-rose-200 text-rose-600 font-medium text-sm shadow-sm">
        ✨ Endulzando momentos especiales
      </div>

      <h1 class="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
        <span class="bg-gradient-to-r from-rose-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">
          Dulce Amarre
        </span>
        <br />
        <span class="text-gray-800 text-3xl md:text-5xl font-semibold">
          Postres que enamoran
        </span>
      </h1>

      <p class="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
        Descubre el arte de la repostería artesanal. Cada postre es una obra maestra
        hecha con amor, los mejores ingredientes y un toque de magia.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#servicios"
          class="group px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white font-bold text-lg shadow-2xl shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-105 transition-all duration-300"
        >
          Ver Productos
          <span class="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
        <a
          href="#ubicacion"
          class="px-8 py-4 rounded-full border-2 border-rose-300 text-rose-600 font-bold text-lg hover:bg-rose-50 hover:border-rose-400 hover:scale-105 transition-all duration-300"
        >
          📍 Encuéntranos
        </a>
      </div>

      <!-- Stats -->
      <div class="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">500+</div>
          <div class="text-sm text-gray-500 mt-1">Clientes felices</div>
        </div>
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">50+</div>
          <div class="text-sm text-gray-500 mt-1">Sabores únicos</div>
        </div>
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">5⭐</div>
          <div class="text-sm text-gray-500 mt-1">Calificación</div>
        </div>
      </div>
    </div>
  </section>
</template>
