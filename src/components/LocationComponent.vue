<script setup lang="ts">
interface ContactItem {
  icon: string
  label: string
  value: string
  link?: string,
  iconMaterial?: boolean,
  iconMaterialName?: string
}

interface Schedule {
  day: string
  hours: string
}

const contactInfo: ContactItem[] = [
  { icon: '📍', label: 'Dirección', value: 'Calle Benito Juárez Nte 8-MZ 027, Santa Clara, 55000 Ecatepec de Morelos, Méx.', link: undefined, iconMaterial: true, iconMaterialName: 'location_on' },
  { icon: '📱', label: 'Teléfono', value: '+52 5532092264', iconMaterial: true, iconMaterialName: 'call' },
  // { icon: '✉️', label: 'Email', value: 'psic.melissa28@gmail.com', link: 'mailto:psic.melissa28@gmail.com', iconMaterial: true, iconMaterialName: 'email' },
  { icon: '📸', label: 'Instagram', value: '@dulceamarre', link: 'https://instagram.com/dulceamarre', iconMaterial: true, iconMaterialName: 'camera' },
  { icon: '👤', label: 'Facebook', value: 'Psic. Melissa Aranda', link: 'https://www.facebook.com/people/Psic-Melissa-Aranda/100083221934124/?mibextid=D4KYlr', iconMaterial: true, iconMaterialName: 'person' },
]

const schedule: Schedule[] = [
  { day: 'Lunes', hours: '18:00 - 21:00' },
  { day: 'Martes', hours: '11:00 - 18:00' },
  { day: 'Miércoles', hours: '18:00 - 21:00' },
  { day: 'Jueves', hours: '11:00 - 19:00' },
  { day: 'Viernes', hours: '11:00 - 12:00' }
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
          Encuéntranos
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Nuestra
          <span class="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">ubicación</span>
        </h2>
        <p class="text-lg text-gray-500 max-w-2xl mx-auto">
          Visítanos y descubre todos nuestros productos en persona
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Map placeholder -->
        <div
          class="rounded-2xl overflow-hidden shadow-xl shadow-rose-500/10 border border-rose-100 min-h-[400px] bg-gradient-to-br from-rose-50 to-amber-50 flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.592687605555!2d-99.04679999999999!3d19.601943299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f1000377d161%3A0x91fecf745fee19fe!2sPsic.%20Melissa%20Aranda%2FMeraki!5e0!3m2!1ses!2smx!4v1772746583990!5m2!1ses!2smx"
            width="100%" height="100%" style="border:0;" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <!-- Contact Info -->
        <div class="flex flex-col gap-8">
          <!-- Contact cards -->
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Información de contacto</h3>
            <div v-for="(item, index) in contactInfo" :key="index"
              class="group flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-rose-50 border border-gray-100 hover:border-rose-200 transition-all duration-300">
              <span v-if="item.iconMaterial" class="material-symbols-outlined text-sm">{{ item.iconMaterialName
                }}</span>
              <span v-else class="text-2xl group-hover:scale-110 transition-transform duration-300">{{ item.icon
                }}</span>
              <div>
                <div class="text-sm text-gray-400 font-medium">{{ item.label }}</div>
                <a v-if="item.link" :href="item.link" target="_blank"
                  class="text-gray-800 font-semibold hover:text-rose-600 transition-colors duration-300">
                  {{ item.value }}
                </a>
                <span v-else class="text-gray-800 font-semibold">{{ item.value }}</span>
              </div>
            </div>
          </div>

          <!-- Schedule -->
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Horarios</h3>
            <div class="space-y-3">
              <div v-for="(item, index) in schedule" :key="index"
                class="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
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
