<script setup lang="ts">
interface Review {
  name?: string
  avatar: string
  rating: number
  comment: string
  product: string
  date?: string
}

const reviews: Review[] = [
  {
    avatar: '👩🏻',
    rating: 5,
    comment: 'Tu trabajo estos tres años que te he conocido ha sido una muy grata experiencia eres una psicóloga muy completa siempre tienes las palabras adecuadas para que mi mente y mi alma sepan el camino infinitas gracias por eso',
    product: 'Pastel de boda',
  },
  {
    avatar: '👨🏽',
    rating: 5,
    comment: 'Recomiendo ampliamente el trabajo de la psicóloga Melissa, llevo un par de años con ella, me ha acompañado en este tiempo de forma psicológica y holística, tiempo en el cual he visto grandes avances personales,  La psicóloga tiene un gran profesionalismo y ética; así como los conocimientos requeridos para llevar el acompañamiento psicológico de los pacientes….',
    product: 'Cupcakes personalizados',
  },
  {
    avatar: '👩🏽',
    rating: 5,
    comment: 'Melissa es una terapeuta única, tiene dones que ha puesto a disposición y estoy muy agradecido con ella. Yo llegué sin poder prácticamente caminar, y a través de sus manos y su conocimiento en Reiki, hoy estoy mejor que nunca.',
    product: 'Reiki',
  },
]
</script>

<template>
  <section id="reviews" class="py-24 px-6 bg-gradient-to-b from-rose-50/50 to-amber-50/30 relative overflow-hidden">
    <!-- Decorative -->
    <div class="absolute top-20 right-10 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl" />
    <div class="absolute bottom-20 left-10 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl" />

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
          Reseñas de Clientes
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Voces de
          <span class="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">sanación</span>
        </h2>
        <p class="text-lg text-gray-500 max-w-2xl mx-auto">
          La satisfacción de nuestros clientes es nuestra mayor recompensa
        </p>
      </div>

      <!-- Reviews Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(review, index) in reviews" :key="index"
          class="bg-background-light p-10 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all flex flex-col gap-6 relative group">
          <div class="absolute -top-1 left-10 text-primary/20 group-hover:text-primary/40 transition-colors">
            <span class="material-symbols-outlined">
              format_quote
            </span>
          </div>
          <p class="text-slate-600 italic text-lg leading-relaxed relative z-10 pt-4">
            {{ review.comment }}
          </p>
          <div class="mt-auto border-t border-primary/5 pt-6">
            <p v-if="review.name" class="font-bold text-primary tracking-wide text-sm uppercase">{{ review.name }}</p>
            <p v-if="review.date" class="text-xs text-slate-400">{{ review.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.material-symbols-outlined {
  font-size: 6rem;
  font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
}
</style>