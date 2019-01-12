<template lang="pug">
  .bubble-wrapper
    .bubble( ref="bubble" )
      img.bubble-image( src="https://s3.ap-southeast-2.amazonaws.com/daily-fire-assets/slack-white.svg" )
    .bubble-pulse( ref="bubblePulse" )
</template>

<script>
import { TimelineLite, Back, Elastic, Expo } from 'gsap'
export default {
  data() {
    return {
      timeline: null
    };
  },
  mounted() {
    const { bubble, bubblePulse } = this.$refs;
    this.timeline = new TimelineLite({
      onComplete: () => this.timeline.restart()
    });
    this.timeline.to(bubble, 0.4, {
      scale: 0.8,
      rotation: 16,
      ease: Back.easeOut.config(1.7)
    });
    this.timeline.to(
      bubblePulse,
      0.8,
      {
        scale: 0.9,
        opacity: 1
      },
      "-=0.6"
    );
    this.timeline.to(bubble, 1.2, {
      scale: 1,
      rotation: "-=16",
      ease: Elastic.easeOut.config(2.5, 0.5)
    });
    this.timeline.to(
      bubblePulse,
      1.1,
      {
        scale: 3,
        opacity: 0,
        ease: Expo.easeOut
      },
      "-=1.2"
    );
  }
}
</script>

<style lang="sass">
body
  display: flex
  align-items: center
  justify-content: center
  background: #1a1a1a
  padding-top: 100px

.bubble
  position: relative
  display: flex
  align-items: center
  justify-content: center
  border: 1px solid white
  background: #272727
  border-radius: 50%
  height: 100px
  width: 100px
    z-index: 2
  &-wrapper
    position: relative
  &-image
    height: 50%
  &-pulse
    position: absolute
    z-index: 1
    height: 120px
    width: 120px
    top: 50%
    left: 50%
    margin-top: -60px
    margin-left: -60px
    background: #272727
    border-radius: 50%
    opacity: 0
    transform: scale(0)
</style>
