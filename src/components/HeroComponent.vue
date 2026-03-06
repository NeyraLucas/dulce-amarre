<script setup lang="ts">
import { ref } from 'vue';

const phoneNumber = ref('5215532092264');
const message = ref('Hola, quiero cotizar');
const whatsappUrl = `https://wa.me/${phoneNumber.value}?text=${encodeURIComponent(message.value)}`;
</script>

<template>
  <section id="inicio"
    class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 xl:pb-10">
    <!-- Content -->
    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <div class="flex flex-col gap-8 lg:w-1/2">
          <div class="flex flex-col gap-4">
            <span class="text-primary font-bold tracking-widest uppercase text-xs">Espacio de Sanación</span>
            <h1 class="text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-800">
              Conecta con tu <span
                class="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Esencia</span>
            </h1>
            <p class="text-lg text-slate-600 max-w-lg leading-relaxed">
              Un espacio sagrado dedicado a tu bienestar integral. Descubre herramientas y terapias diseñadas para
              armonizar tu cuerpo, mente y espíritu.
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/2">
          <div class="aspect-[4/3] w-full rounded-xl bg-primary/5 overflow-hidden shadow-2xl relative">
            <div class="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            <img alt="Ambiente zen con velas y cristales" class="h-full w-full object-cover"
              src="../assets/vela-caldero-de-bruja.jpeg" />
          </div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
        <a :href="whatsappUrl" target="_blank"
          class="group px-8 py-4 rounded-full bg-primary text-white font-bold text-lg shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300">
          Contactar por WhatsApp
        </a>
        <a href="#servicios"
          class="px-8 py-4 rounded-full border-2 border-primary/20 text-primary font-bold text-lg hover:bg-primary/5 transition-colors">
          Ver Productos
          <span class="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>

      <!-- Stats -->
      <div class="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
        <div class="text-center">
          <div
            class="text-3xl md:text-4xl font-extrabold bg-primary from-rose-500 to-pink-500 bg-clip-text text-transparent">
            100+</div>
          <div class="text-sm text-gray-500 mt-1">Clientes felices</div>
        </div>
        <div class="text-center">
          <div
            class="text-3xl md:text-4xl font-extrabold bg-primary from-pink-500 to-amber-500 bg-clip-text text-transparent">
            20+</div>
          <div class="text-sm text-gray-500 mt-1">Productos</div>
        </div>
        <div class="text-center">
          <div
            class="text-3xl md:text-4xl font-extrabold bg-primary from-amber-500 to-rose-500 bg-clip-text text-transparent">
            5⭐</div>
          <div class="text-sm text-gray-500 mt-1">Calificación</div>
        </div>
      </div>
    </div>
  </section>
</template>
