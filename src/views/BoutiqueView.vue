<script setup lang="ts">
import { RouterLink } from 'vue-router'
import imgTienda from '../assets/imgs/tienda-holistica.jpeg'
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
                    <span class="text-primary font-bold tracking-widest uppercase text-xs">Boutique</span>
                    <h1 class="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-2 mb-6">
                        Boutique <span class="text-primary italic">Holística</span>
                    </h1>
                    <p class="text-lg text-slate-600 leading-relaxed">
                        Productos seleccionados cuidadosamente para elevar tu vibración y transformar tu ritual
                        diario en algo mágico. Encuentra cristales, velas, inciensos y herramientas energéticas
                        para tu camino espiritual.
                    </p>
                </div>
                <div class="lg:w-1/2">
                    <div class="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-2xl">
                        <img :src="imgTienda" alt="Boutique Holística" class="h-full w-full object-cover" />
                    </div>
                </div>
            </div>

            <!-- Info -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
                    <span class="material-symbols-outlined text-primary text-3xl mb-3">spa</span>
                    <h3 class="font-bold text-slate-900 mb-2">Cristales & Minerales</h3>
                    <p class="text-sm text-slate-500">Piedras energéticas seleccionadas para armonizar tu espacio y tu
                        ser.</p>
                </div>
                <div class="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
                    <span class="material-symbols-outlined text-primary text-3xl mb-3">local_fire_department</span>
                    <h3 class="font-bold text-slate-900 mb-2">Velas & Inciensos</h3>
                    <p class="text-sm text-slate-500">Aromas sagrados para crear atmósferas de paz y meditación.</p>
                </div>
                <div class="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
                    <span class="material-symbols-outlined text-primary text-3xl mb-3">auto_awesome</span>
                    <h3 class="font-bold text-slate-900 mb-2">Herramientas Energéticas</h3>
                    <p class="text-sm text-slate-500">Péndulos, tarot, cuencos tibetanos y más para tu práctica.</p>
                </div>
            </div>
        </div>
    </section>
</template>
