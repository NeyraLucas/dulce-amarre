<script setup lang="ts">
interface Service {
  icon: string
  title: string
  description: string
  tag: string
}

const services: Service[] = [
  {
    icon: '🎂',
    title: 'Pasteles Personalizados',
    description: 'Diseñamos el pastel de tus sueños para bodas, cumpleaños, XV años y cualquier celebración especial.',
    tag: 'Popular',
  },
  {
    icon: '🧁',
    title: 'Cupcakes Artesanales',
    description: 'Irresistibles cupcakes decorados a mano con los mejores ingredientes y sabores únicos.',
    tag: 'Nuevo',
  },
  {
    icon: '🍪',
    title: 'Galletas Decoradas',
    description: 'Galletas personalizadas perfectas para regalos, eventos corporativos y detalles especiales.',
    tag: 'Favorito',
  },
  {
    icon: '🍫',
    title: 'Mesa de Postres',
    description: 'Creamos mesas de postres completas que deslumbrarán a todos tus invitados.',
    tag: 'Premium',
  },
  {
    icon: '🍰',
    title: 'Cheesecakes',
    description: 'Deliciosos cheesecakes artesanales en variedad de sabores: frutos rojos, oreo, nutella y más.',
    tag: 'Clásico',
  },
  {
    icon: '🍩',
    title: 'Donas Gourmet',
    description: 'Donas artesanales con glaseados únicos y toppings premium para eventos y antojos.',
    tag: 'Especial',
  },
]
</script>

<template>
  <section id="servicios" class="py-24 px-6 bg-white relative overflow-hidden">
    <!-- Decorative background -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400" />
    <div class="absolute -top-40 -right-40 w-80 h-80 bg-rose-100/50 rounded-full blur-3xl" />
    <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl" />

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-600 text-sm font-semibold mb-4">
          🍰 Nuestros Productos
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Hechos con <span class="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">amor</span>
        </h2>
        <p class="text-lg text-gray-500 max-w-2xl mx-auto">
          Cada producto es elaborado artesanalmente con ingredientes de primera calidad
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-rose-500/10 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
        >
          <!-- Tag -->
          <span class="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white text-xs font-bold">
            {{ service.tag }}
          </span>

          <!-- Icon -->
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-50 to-amber-50 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
            {{ service.icon }}
          </div>

          <!-- Content -->
          <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors duration-300">
            {{ service.title }}
          </h3>
          <p class="text-gray-500 leading-relaxed">
            {{ service.description }}
          </p>

          <!-- Arrow -->
          <div class="mt-6 flex items-center text-rose-500 font-semibold opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
            Ver más <span class="ml-2">→</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
