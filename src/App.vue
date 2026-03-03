<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue'
import HeroComponent from './components/HeroComponent.vue'
import ServicesComponent from './components/ServicesComponent.vue'
import ReviewsComponent from './components/ReviewsComponent.vue'
import LocationComponent from './components/LocationComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <NavbarComponent />
  <main>
    <HeroComponent />
    <ServicesComponent />
    <ReviewsComponent />
    <LocationComponent />
  </main>
  <FooterComponent />
</template>
