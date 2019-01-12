<template lang="pug">
  - var cell = 0;
  .grid
    while cell < 57
      .grid__item= cell++
</template>

<script>
export default {
}
</script>

<style lang="sass">
body
  display: flex
  justify-content: center
  align-items: center
.grid
  display: flex
  flex-wrap: wrap
  width: 500px
  height: 400px
  &__item
    height: 60px
    width: 60px
    background: grey
    color: transparent
    opacity: 0
    transform: scale(1)
    transition: opacity 3s ease, transform .4s ease
    &:hover
      opacity: 1
      transform: scale(1.04)
      transition: opacity .4s ease
</style>
