<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import BtnWhatsApp from './components/BtnWhatsApp.vue'
</script>

<template>
  <NavbarComponent />
  <main>
    <RouterView />
  </main>
  <FooterComponent />
  <BtnWhatsApp />
</template>
