<template>
  <div>
    <ul>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/sobre">Sobre</NuxtLink>
    </ul>
    <Nuxt />
    <footer>Rodapé</footer>
  </div>
</template>

<style scoped>
a.nuxt-link-active {
  font-weight: bold;
}
</style>
