<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const navLinks = [
  { label: 'Inicio', to: { path: '/', hash: '#inicio' } },
  { label: 'Boutique', to: '/boutique-holistica' },
  { label: 'Terapias', to: '/terapias-holisticas' },
  { label: 'Psicología', to: '/psicologia-transpersonal' },
  { label: 'Contacto', to: { path: '/', hash: '#ubicacion' } },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const phoneNumber = ref('5215532092264');
const message = ref('Hola, quiero cotizar');
const whatsappUrl = `https://wa.me/${phoneNumber.value}?text=${encodeURIComponent(message.value)}`;
</script>

<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-purple-100 shadow-sm transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2 group">
        <span class="text-xl font-bold tracking-tight text-purple-600">
          Dulce Amarre
        </span>
      </RouterLink>

      <!-- Desktop Nav -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.label">
          <RouterLink :to="link.to" class="text-sm font-semibold hover:text-primary transition-colors">
            {{ link.label }}
          </RouterLink>
        </li>
        <li>
          <a :href="whatsappUrl" target="_blank"
            class="flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
            WhatsApp
          </a>
        </li>
      </ul>

      <!-- Mobile Hamburger -->
      <button class="md:hidden flex flex-col gap-1.5 p-2 group" @click="toggleMenu" aria-label="Toggle menu">
        <span class="block w-6 h-0.5 bg-gray-700 transition-all duration-300 origin-center"
          :class="isMenuOpen ? 'rotate-45 translate-y-2' : ''" />
        <span class="block w-6 h-0.5 bg-gray-700 transition-all duration-300"
          :class="isMenuOpen ? 'opacity-0 scale-0' : ''" />
        <span class="block w-6 h-0.5 bg-gray-700 transition-all duration-300 origin-center"
          :class="isMenuOpen ? '-rotate-45 -translate-y-2' : ''" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
      <div v-if="isMenuOpen" class="md:hidden bg-white/95 backdrop-blur-xl border-t border-purple-100 shadow-lg">
        <ul class="flex flex-col items-center gap-4 py-6">
          <li v-for="link in navLinks" :key="link.label">
            <RouterLink :to="link.to"
              class="text-lg text-gray-700 font-medium hover:text-purple-600 transition-colors duration-300"
              @click="isMenuOpen = false">
              {{ link.label }}
            </RouterLink>
          </li>
          <li>
            <a :href="whatsappUrl" target="_blank"
              class="flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
              @click="isMenuOpen = false">
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>
