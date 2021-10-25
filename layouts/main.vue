<template>
  <div class="default-main">
    <ul>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/sobre">Sobre</NuxtLink>
    </ul>
    <Nuxt />
  </div>
</template>

<style scoped>
a.nuxt-link-active {
  font-weight: bold;
}
</style>
