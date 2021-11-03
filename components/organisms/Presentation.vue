<template>
  <div class="presentation">
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni deleniti
      accusamus, aliquid iure dolor necessitatibus quidem itaque tempore veniam
      pariatur animi nam. Iure, nostrum velit quod dolor autem vitae possimus?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae cum,
      laudantium explicabo nemo quae odio soluta accusantium ex provident
      perferendis expedita magnam, quod unde iste! Velit laborum reprehenderit
      beatae est!
    </p>
    <img src="@/assets/img/presentation.svg" alt="presentation" />
  </div>
</template>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>
