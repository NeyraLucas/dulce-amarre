<script setup lang="ts">
import { RouterLink } from 'vue-router'
import imgPsicologia from '../assets/imgs/psicologia-transpersonal.png'
</script>

<template>
    <section class="min-h-screen pt-24 pb-16 px-6 bg-background-light">
        <div class="max-w-5xl mx-auto">
            <!-- Back -->
            <RouterLink to="/"
                class="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:gap-3 transition-all">
                <span class="material-symbols-outlined text-sm">arrow_back</span>
                Volver al inicio
            </RouterLink>

            <!-- Hero -->
            <div class="flex flex-col lg:flex-row gap-12 items-center mb-16">
                <div class="lg:w-1/2">
                    <span class="text-primary font-bold tracking-widest uppercase text-xs">Psicología</span>
                    <h1 class="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-2 mb-6">
                        Psicología <span class="text-primary italic">Transpersonal</span>
                    </h1>
                    <p class="text-lg text-slate-600 leading-relaxed">
                        Un espacio seguro para integrar tu espiritualidad con tu proceso emocional. El acompañamiento
                        transpersonal va más allá de lo convencional, invitándote a explorar la totalidad de tu ser para
                        sanar desde la raíz y encontrar un propósito más profundo."
                    </p>
                </div>
                <div class="lg:w-1/2">
                    <div class="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-2xl">
                        <img :src="imgPsicologia" alt="Psicología Transpersonal" class="h-full w-full object-cover" />
                    </div>
                </div>
            </div>

            <!-- Info -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
                    <span class="material-symbols-outlined text-primary text-3xl mb-3">psychology</span>
                    <h3 class="font-bold text-slate-900 mb-2">Terapia Individual</h3>
                    <p class="text-sm text-slate-500">Sesiones personalizadas para explorar tu mundo interior y sanar
                        heridas profundas.</p>
                </div>
                <div class="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
                    <span class="material-symbols-outlined text-primary text-3xl mb-3">diversity_3</span>
                    <h3 class="font-bold text-slate-900 mb-2">Terapia de Pareja</h3>
                    <p class="text-sm text-slate-500">Reconexión y comunicación consciente para fortalecer vínculos
                        afectivos.</p>
                </div>
                <div class="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
                    <span class="material-symbols-outlined text-primary text-3xl mb-3">groups</span>
                    <h3 class="font-bold text-slate-900 mb-2">Talleres Grupales</h3>
                    <p class="text-sm text-slate-500">Espacios de crecimiento colectivo para compartir y transformar en
                        comunidad.</p>
                </div>
            </div>
        </div>
    </section>
</template>
