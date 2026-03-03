<script setup lang="ts">
interface ContactItem {
  icon: string
  label: string
  value: string
  link?: string
}

interface Schedule {
  day: string
  hours: string
}

const contactInfo: ContactItem[] = [
  { icon: '📍', label: 'Dirección', value: 'Av. Principal #123, Col. Centro, Ciudad', link: undefined },
  { icon: '📱', label: 'Teléfono', value: '+52 (123) 456-7890', link: 'tel:+521234567890' },
  { icon: '✉️', label: 'Email', value: 'hola@dulceamarre.com', link: 'mailto:hola@dulceamarre.com' },
  { icon: '📸', label: 'Instagram', value: '@dulceamarre', link: 'https://instagram.com/dulceamarre' },
]

const schedule: Schedule[] = [
  { day: 'Lunes - Viernes', hours: '9:00 AM - 8:00 PM' },
  { day: 'Sábado', hours: '10:00 AM - 6:00 PM' },
  { day: 'Domingo', hours: '10:00 AM - 3:00 PM' },
]
</script>

<template>
  <section id="ubicacion" class="py-24 px-6 bg-white relative overflow-hidden">
    <!-- Decorative -->
    <div class="absolute -top-40 -left-40 w-80 h-80 bg-rose-100/40 rounded-full blur-3xl" />
    <div class="absolute -bottom-40 -right-40 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl" />

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-600 text-sm font-semibold mb-4">
          📍 Encuéntranos
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Nuestra
          <span class="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">ubicación</span>
        </h2>
        <p class="text-lg text-gray-500 max-w-2xl mx-auto">
          Visítanos y descubre todos nuestros deliciosos productos en persona
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Map placeholder -->
        <div class="rounded-2xl overflow-hidden shadow-xl shadow-rose-500/10 border border-rose-100 min-h-[400px] bg-gradient-to-br from-rose-50 to-amber-50 flex items-center justify-center">
          <div class="text-center p-8">
            <span class="text-6xl mb-4 block">🗺️</span>
            <p class="text-gray-500 text-lg font-medium">Mapa interactivo</p>
            <p class="text-gray-400 text-sm mt-2">Av. Principal #123, Col. Centro</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              class="inline-block mt-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-rose-500/25"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="flex flex-col gap-8">
          <!-- Contact cards -->
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Información de contacto</h3>
            <div
              v-for="(item, index) in contactInfo"
              :key="index"
              class="group flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-rose-50 border border-gray-100 hover:border-rose-200 transition-all duration-300"
            >
              <span class="text-2xl group-hover:scale-110 transition-transform duration-300">{{ item.icon }}</span>
              <div>
                <div class="text-sm text-gray-400 font-medium">{{ item.label }}</div>
                <a
                  v-if="item.link"
                  :href="item.link"
                  target="_blank"
                  class="text-gray-800 font-semibold hover:text-rose-600 transition-colors duration-300"
                >
                  {{ item.value }}
                </a>
                <span v-else class="text-gray-800 font-semibold">{{ item.value }}</span>
              </div>
            </div>
          </div>

          <!-- Schedule -->
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">🕐 Horarios</h3>
            <div class="space-y-3">
              <div
                v-for="(item, index) in schedule"
                :key="index"
                class="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100"
              >
                <span class="font-medium text-gray-700">{{ item.day }}</span>
                <span class="font-bold text-rose-600">{{ item.hours }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
