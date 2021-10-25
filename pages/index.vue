<template>
  <div class="home">
    <h1>Home</h1>

    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
const sleep = () => {
  return new Promise((resolve) => setTimeout(resolve, 1500))
}
export default Vue.extend({
  layout: 'main',
  async asyncData() {
    await sleep()
    const title = 'Titulo da postagem'
    const content = 'Corpo da postagem'
    return { title, content }
  },
  data() {
    return {
      title: '',
      content: ''
    }
  }
})
</script>
