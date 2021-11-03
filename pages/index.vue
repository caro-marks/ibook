<template>
  <HomeTemplate />
  <!-- <div class="count">
    <h1>{{ $count }}</h1>
    <button @click="increment(5)">acrescentar</button>
  </div> -->
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'
export default Vue.extend({
  layout: 'ibook',
  async asyncData() {
    await books.index()
  }
  // computed: {
  //   $count() {
  //     return books.$count
  //   }
  // },
  // methods: {
  //   increment(number: number) {
  //     books.increment(number)
  //   }
  // }
})
</script>
