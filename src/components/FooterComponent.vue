<script setup lang="ts">
const currentYear = new Date().getFullYear()

const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const socialLinks = [
  { icon: '📸', label: 'Instagram', href: 'https://instagram.com/dulceamarre' },
  { icon: '👍', label: 'Facebook', href: 'https://facebook.com/dulceamarre' },
  { icon: '📱', label: 'TikTok', href: 'https://tiktok.com/@dulceamarre' },
  { icon: '💬', label: 'WhatsApp', href: 'https://wa.me/521234567890' },
]
</script>

<template>
  <footer class="relative bg-gray-950 text-white overflow-hidden">
    <!-- Top gradient line -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500" />

    <!-- Decorative -->
    <div class="absolute top-20 right-10 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl" />
    <div class="absolute bottom-10 left-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />

    <div class="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <span class="text-3xl">🍬</span>
            <span class="text-2xl font-bold bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">
              Dulce Amarre
            </span>
          </div>
          <p class="text-gray-400 leading-relaxed mb-6">
            Endulzando momentos especiales con repostería artesanal de la más alta calidad.
          </p>
          <!-- Social Links -->
          <div class="flex gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              target="_blank"
              :aria-label="social.label"
              class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg hover:bg-gradient-to-r hover:from-rose-500 hover:to-amber-500 hover:border-transparent hover:scale-110 transition-all duration-300"
            >
              {{ social.icon }}
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-bold mb-4 text-white">Enlaces Rápidos</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.href">
              <a
                :href="link.href"
                class="text-gray-400 hover:text-rose-400 transition-colors duration-300 flex items-center gap-2"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-rose-500/50" />
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-lg font-bold mb-4 text-white">Contacto</h4>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start gap-2">
              <span>📍</span>
              <span>Av. Principal #123, Col. Centro</span>
            </li>
            <li class="flex items-start gap-2">
              <span>📱</span>
              <a href="tel:+521234567890" class="hover:text-rose-400 transition-colors duration-300">
                +52 (123) 456-7890
              </a>
            </li>
            <li class="flex items-start gap-2">
              <span>✉️</span>
              <a href="mailto:hola@dulceamarre.com" class="hover:text-rose-400 transition-colors duration-300">
                hola@dulceamarre.com
              </a>
            </li>
          </ul>
        </div>

        <!-- Hours -->
        <div>
          <h4 class="text-lg font-bold mb-4 text-white">Horarios</h4>
          <ul class="space-y-3 text-gray-400">
            <li class="flex justify-between">
              <span>Lun - Vie</span>
              <span class="text-rose-400 font-medium">9:00 - 20:00</span>
            </li>
            <li class="flex justify-between">
              <span>Sábado</span>
              <span class="text-rose-400 font-medium">10:00 - 18:00</span>
            </li>
            <li class="flex justify-between">
              <span>Domingo</span>
              <span class="text-rose-400 font-medium">10:00 - 15:00</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-gray-500 text-sm">
          © {{ currentYear }} Dulce Amarre. Todos los derechos reservados.
        </p>
        <p class="text-gray-600 text-sm flex items-center gap-1">
          Hecho con <span class="text-rose-500">♥</span> y mucho azúcar 🍬
        </p>
      </div>
    </div>
  </footer>
</template>
