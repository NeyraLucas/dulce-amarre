<script setup lang="ts">
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'
import imgTienda from '../assets/imgs/tienda-holistica.jpeg'

import caldero01 from '../assets/imgs/products/01-caldero-bruja-01.jpeg'
import caldero02 from '../assets/imgs/products/01-caldero-bruja-02.jpeg'
import balsamo01 from '../assets/imgs/products/02-balsamo-01.jpeg'
import balsamo02 from '../assets/imgs/products/02-balsamo-02.jpeg'

import mujerplus01 from '../assets/imgs/products/03-mujer-plus.jpeg'

import velahappy01 from '../assets/imgs/products/04-happy-birthday-01.jpeg'
import velahappy02 from '../assets/imgs/products/04-happy-birthday-02.jpeg'
import velahappy03 from '../assets/imgs/products/04-happy-birthday-03.jpeg'

import cicloideal01 from '../assets/imgs/products/05-ciclo-ideal.jpeg'

import palosanto01 from '../assets/imgs/products/06-vela-palo-santo-01.jpeg'
import palosanto02 from '../assets/imgs/products/06-vela-palo-santo-02.jpeg'
import palosanto03 from '../assets/imgs/products/06-vela-palo-santo-03.jpeg'

import suenoprofundo01 from '../assets/imgs/products/07-sueno-profundo-01.png'

interface Product {
    name: string
    description: string
    price?: string
    images: string[]
}

const products: Product[] = [
    {
        name: 'Caldero de Bruja',
        description: 'Enciende esta vela especial y deja que la llama revele secretos místicos y guíe tus intenciones.',
        price: '$460',
        images: [caldero01, caldero02],
    },
    {
        name: 'Apapacho Bálsamos',
        description: 'Bálsamos artesanales hechos de ingredientes naturales.',
        price: '$200',
        images: [balsamo01, balsamo02],
    },
    {
        name: 'Mujer Plus',
        description: 'Regula alteraciones hormonales causadas por la menopausia.',
        price: '$459',
        images: [mujerplus01],
    },
    {
        name: 'Vela Happy Birthday',
        description: 'Happy Birthday! Regala una vela mágica de alta calidad con cuarzos y rituales.',
        price: '$420',
        images: [velahappy01, velahappy02, velahappy03],
    },
    {
        name: 'Ciclo Ideal',
        description: 'Gomitas auxiliares para recular el ciclo y disminuir las molestas durante nuestro período.',
        price: '$459',
        images: [cicloideal01],
    },
    {
        name: 'Vela Palo Santo',
        description: 'Increíble Velita de Palo Santo decorada con piedra Pirita, Amatista, Citrino y chips de Palo Santo.',
        price: '$290',
        images: [palosanto01, palosanto02, palosanto03],
    },
    {
        name: 'Sueño profundo',
        description: 'Auxiliar natural para conciliar el sueño, Regula estrés y apetito No genera dependencia',
        price: '$305',
        images: [suenoprofundo01],
    },
]

const activeSlides = reactive<Record<number, number>>(
    Object.fromEntries(products.map((_, i) => [i, 0]))
)

const nextSlide = (productIndex: number) => {
    const product = products[productIndex]
    if (!product) return
    activeSlides[productIndex] = ((activeSlides[productIndex] ?? 0) + 1) % product.images.length
}

const prevSlide = (productIndex: number) => {
    const product = products[productIndex]
    if (!product) return
    activeSlides[productIndex] = ((activeSlides[productIndex] ?? 0) - 1 + product.images.length) % product.images.length
}

const goToSlide = (productIndex: number, slideIndex: number) => {
    activeSlides[productIndex] = slideIndex
}
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
                        Transforma tu ritual cotidiano en una experiencia mágica. Nuestra boutique reúne herramientas,
                        aromas y elementos de alta vibración, cuidadosamente seleccionados para sostener tu práctica y
                        nutrir tu espíritu.
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
                    <span class="material-symbols-outlined text-primary text-3xl mb-3">local_fire_department</span>
                    <h3 class="font-bold text-slate-900 mb-2">Velas & Inciensos</h3>
                    <p class="text-sm text-slate-500">Aromas sagrados para crear atmósferas de paz y meditación.</p>
                </div>
                <div class="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
                    <span class="material-symbols-outlined text-primary text-3xl mb-3">spa</span>
                    <h3 class="font-bold text-slate-900 mb-2">Bálsamos Naturales</h3>
                    <p class="text-sm text-slate-500">Bálsamos formulados con plantas medicinales. Un ritual de tacto y
                        sanación diseñado para calmar tu energía y aliviar el estrés cotidiano.</p>
                </div>
                <div class="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
                    <span class="material-symbols-outlined text-primary text-3xl mb-3">auto_awesome</span>
                    <h3 class="font-bold text-slate-900 mb-2">Herramientas Energéticas</h3>
                    <p class="text-sm text-slate-500">Péndulos, tarot, cuencos tibetanos y más para tu práctica.</p>
                </div>
            </div>

            <!-- Products -->
            <div class="mt-20">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                        Nuestros <span
                            class="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Productos</span>
                    </h2>
                    <p class="text-slate-500 max-w-xl mx-auto">Elementos cuidadosamente seleccionados para acompañar tu
                        camino espiritual</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div v-for="(product, pIndex) in products" :key="pIndex"
                        class="group rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                        <!-- Image Carousel -->
                        <div class="relative aspect-square overflow-hidden">
                            <div class="relative w-full h-full">
                                <img v-for="(img, iIndex) in product.images" :key="iIndex" :src="img"
                                    :alt="`${product.name} - imagen ${iIndex + 1}`"
                                    class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                                    :class="activeSlides[pIndex] === iIndex ? 'opacity-100' : 'opacity-0'"
                                    loading="lazy" />
                            </div>

                            <!-- Prev / Next buttons -->
                            <button v-if="product.images.length > 1" @click="prevSlide(pIndex)"
                                class="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
                                <span class="material-symbols-outlined text-slate-700 text-lg">chevron_left</span>
                            </button>
                            <button v-if="product.images.length > 1" @click="nextSlide(pIndex)"
                                class="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
                                <span class="material-symbols-outlined text-slate-700 text-lg">chevron_right</span>
                            </button>

                            <!-- Dot indicators -->
                            <div v-if="product.images.length > 1"
                                class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                                <button v-for="(_, iIndex) in product.images" :key="iIndex"
                                    @click="goToSlide(pIndex, iIndex)"
                                    class="w-2 h-2 rounded-full transition-all duration-300"
                                    :class="activeSlides[pIndex] === iIndex ? 'bg-white w-5' : 'bg-white/50'" />
                            </div>
                        </div>

                        <!-- Product Info -->
                        <div class="p-6">
                            <div class="flex items-start justify-between gap-4">
                                <h3 class="text-xl font-bold text-slate-900">{{ product.name }}</h3>
                                <span v-if="product.price"
                                    class="text-lg font-extrabold text-primary whitespace-nowrap">
                                    {{ product.price }}
                                </span>
                            </div>
                            <p class="text-slate-600 text-sm leading-relaxed mt-3">
                                {{ product.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
