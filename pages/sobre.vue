<template>
  <div class="sobre">
    <h1>Sobre</h1>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'main',
  data() {
    return {
      title: 'dynamic title'
    }
  },
  head(this: any) {
    return {
      title: this.title
    }
  }
})
</script>
