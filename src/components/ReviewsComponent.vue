<script setup lang="ts">
interface Review {
  name: string
  avatar: string
  rating: number
  comment: string
  date: string
  product: string
}

const reviews: Review[] = [
  {
    name: 'María García',
    avatar: '👩🏻',
    rating: 5,
    comment: '¡El pastel de mi boda fue absolutamente perfecto! Todos los invitados quedaron encantados. El sabor y la decoración superaron mis expectativas.',
    date: 'Hace 2 semanas',
    product: 'Pastel de boda',
  },
  {
    name: 'Carlos Mendoza',
    avatar: '👨🏽',
    rating: 5,
    comment: 'Los cupcakes para el cumpleaños de mi hija fueron un éxito total. Hermosos, deliciosos y el servicio fue increíble.',
    date: 'Hace 1 mes',
    product: 'Cupcakes personalizados',
  },
  {
    name: 'Ana López',
    avatar: '👩🏽',
    rating: 5,
    comment: 'La mesa de postres para mi evento corporativo fue espectacular. Profesionalismo y calidad en cada detalle. ¡100% recomendados!',
    date: 'Hace 3 semanas',
    product: 'Mesa de postres',
  },
  {
    name: 'Roberto Sánchez',
    avatar: '👨🏻',
    rating: 5,
    comment: 'El cheesecake de frutos rojos es el mejor que he probado. Ahora lo pido cada semana. ¡Son adictivos!',
    date: 'Hace 1 semana',
    product: 'Cheesecake',
  },
  {
    name: 'Laura Hernández',
    avatar: '👩🏻',
    rating: 5,
    comment: 'Las galletas decoradas que pedí como recuerdo de bautizo fueron preciosas. Un detalle elegante y delicioso.',
    date: 'Hace 2 meses',
    product: 'Galletas decoradas',
  },
  {
    name: 'Diego Torres',
    avatar: '👨🏽',
    rating: 5,
    comment: 'Pedí un pastel temático de superhéroes para mi hijo y quedó espectacular. El niño no paraba de sonreír. ¡Gracias!',
    date: 'Hace 5 días',
    product: 'Pastel temático',
  },
]
</script>

<template>
  <section id="resenas" class="py-24 px-6 bg-gradient-to-b from-rose-50/50 to-amber-50/30 relative overflow-hidden">
    <!-- Decorative -->
    <div class="absolute top-20 right-10 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl" />
    <div class="absolute bottom-20 left-10 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl" />

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
          ⭐ Reseñas de Clientes
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Lo que dicen nuestros
          <span class="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">clientes</span>
        </h2>
        <p class="text-lg text-gray-500 max-w-2xl mx-auto">
          La satisfacción de nuestros clientes es nuestra mayor recompensa
        </p>
      </div>

      <!-- Reviews Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-sm hover:shadow-xl hover:shadow-rose-500/5 hover:-translate-y-1 transition-all duration-500"
        >
          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <span
              v-for="star in review.rating"
              :key="star"
              class="text-amber-400 text-lg"
            >
              ★
            </span>
          </div>

          <!-- Comment -->
          <p class="text-gray-600 leading-relaxed mb-6 italic">
            "{{ review.comment }}"
          </p>

          <!-- Product tag -->
          <span class="inline-block px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold mb-4">
            {{ review.product }}
          </span>

          <!-- Author -->
          <div class="flex items-center gap-3 pt-4 border-t border-gray-100">
            <span class="text-3xl">{{ review.avatar }}</span>
            <div>
              <div class="font-bold text-gray-900">{{ review.name }}</div>
              <div class="text-sm text-gray-400">{{ review.date }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
