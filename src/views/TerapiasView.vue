<script setup lang="ts">
import { RouterLink } from 'vue-router'
import imgTerapias from '../assets/imgs/terapias-holisticas.jpeg'
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
                    <span class="text-primary font-bold tracking-widest uppercase text-xs">Terapias</span>
                    <h1 class="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-2 mb-6">
                        Terapias <span class="text-primary italic">Holísticas</span>
                    </h1>
                    <p class="text-lg text-slate-600 leading-relaxed">
                        Nuestras Terapias Holísticas están diseñadas para abordar a la persona como un todo integrado.
                        No solo tratamos síntomas, sino que buscamos la raíz energética y emocional de los bloqueos que
                        impiden tu plenitud.
                    </p>
                    <p class="text-lg text-slate-600 leading-relaxed">
                        A través de técnicas ancestrales combinadas con sabiduría contemporánea, facilitamos un espacio
                        seguro para la introspección y la liberación emocional.
                    </p>
                </div>
                <div class="lg:w-1/2">
                    <div class="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-2xl">
                        <img :src="imgTerapias" alt="Terapias Holísticas" class="h-full w-full object-cover" />
                    </div>
                </div>
            </div>

            <!-- Info -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
                    <span class="material-symbols-outlined text-primary text-3xl mb-3">history</span>
                    <h3 class="font-bold text-slate-900 mb-2">Regresión a vidas pasadas</h3>
                    <p class="text-sm text-slate-500">Un encuentro con la historia de tu alma a lo largo de todas tus
                        reencarnaciones.</p>
                </div>
                <div class="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
                    <span class="material-symbols-outlined text-primary text-3xl mb-3">self_improvement</span>
                    <h3 class="font-bold text-slate-900 mb-2">Péndulo Hebreo</h3>
                    <p class="text-sm text-slate-500">Terapia en dónde puedes sanar y equilibrar tu cuerpo energético.
                    </p>
                </div>
                <div class="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
                    <span class="material-symbols-outlined text-primary text-3xl mb-3">healing</span>
                    <h3 class="font-bold text-slate-900 mb-2">Reiki</h3>
                    <p class="text-sm text-slate-500">Canalización de energía universal para restablecer tu equilibrio
                        vital.</p>
                </div>
            </div>
        </div>
    </section>
</template>
