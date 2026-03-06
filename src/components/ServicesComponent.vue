<script setup lang="ts">
import { RouterLink } from 'vue-router'
import imgTienda from '../assets/imgs/tienda-holistica.jpeg'
import imgTerapias from '../assets/imgs/terapias-holisticas.jpeg'
import imgPsicologia from '../assets/imgs/psicologia-transpersonal.png'

interface Service {
  icon: string
  title: string
  description: string
  tag: string
  img: string
  route: string
}

const services: Service[] = [
  {
    icon: 'shopping_bag',
    title: 'Boutique Holística',
    description: 'Productos seleccionados cuidadosamente para elevar tu vibración y transformar tu ritual diario en algo mágico.',
    tag: 'Explorar Tienda',
    img: imgTienda,
    route: '/boutique-holistica',
  },
  {
    icon: 'self_improvement',
    title: 'Terapias Holísticas',
    description: 'Reconexión integral a través de diversas técnicas milenarias adaptadas a tus necesidades energéticas actuales.',
    tag: 'Ver Terapias',
    img: imgTerapias,
    route: '/terapias-holisticas',
  },
  {
    icon: 'psychology',
    title: 'Psicología Transpersonal',
    description: 'Acompañamiento profundo que integra los aspectos espirituales y trascendentales de la experiencia humana.',
    tag: 'Saber más',
    img: imgPsicologia,
    route: '/psicologia-transpersonal',
  },
]
</script>

<template>
  <section id="servicios" class="py-24 px-6 bg-primary/5 relative overflow-hidden">
    <!-- Decorative background -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-purple-400 to-pink-400" />
    <div class="absolute -top-40 -right-40 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl" />
    <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-100/50 rounded-full blur-3xl" />

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Nuestros <span
            class="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Servicios</span>
        </h2>
        <p class="text-lg text-gray-500 max-w-2xl mx-auto">
          Descubre todo lo que tenemos para ti
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(service, index) in services" :key="index"
          class="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-rose-500/10 hover:-translate-y-2 transition-all duration-500 cursor-pointer">

          <div class="aspect-square w-full rounded-lg overflow-hidden mb-6 relative">
            <img alt="Boutique Holística"
              class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              :src="service.img" />
            <div class="absolute top-4 right-4 bg-primary text-white p-2 rounded-full shadow-lg">
              <span class="material-symbols-outlined">{{ service.icon }}</span>
            </div>
          </div>
          <h3 class="text-xl font-bold mb-2 text-slate-900">{{ service.title }}</h3>
          <p class="text-slate-600 text-sm leading-relaxed mb-4">
            {{ service.description }}
          </p>
          <RouterLink :to="service.route"
            class="mt-auto text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
            {{ service.tag }}<span class="material-symbols-outlined text-sm">arrow_forward</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
