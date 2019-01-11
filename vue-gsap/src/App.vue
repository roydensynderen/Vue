<template lang="pug">
  .box(ref="box")
</template>

<script>
import { TimelineLite, Back } from 'gsap'

export default {
  mounted() {
    const { box } = this.$refs
    const timeline = new TimelineLite()

    timeline.to(box, 1, { 
      x: 200, 
      rotation: 90,
      ease: Back.easeInOut
    })

    timeline.to(box, 0.5, {
      background: 'green'
    }, '-=0.5')
  }
}
</script>

<style lang="sass">
*
  box-sizing: border-box
  margin: 0
  padding: 0

.box
  height: 60px
  width: 60px
  background: red
</style>

