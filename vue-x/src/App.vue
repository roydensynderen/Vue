<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result></app-result>
        <app-second-result></app-second-result>
        <hr>
        <app-counter></app-counter>
        <app-second-counter></app-second-counter>
        <hr>
        <input type="text" :value='value' @input='updateValue'>
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Counter from './components/Counter.vue'
  import SecondCounter from './components/SecondCounter.vue'
  import Result from './components/Result.vue'
  import SecondResult from './components/SecondResult.vue'

  export default {
    computed: {
      value: {
        get() {
          return this.$store.getters.value
        },
        set(value) {
          this.$store.dispatch('updateValue', value)
        }
      }
    },
    methods: {
      updateValue(event) {
        this.$store.dispatch('updateValue', event.target.value)
      }
    },
    components: {
      appCounter: Counter,
      appSecondCounter: SecondCounter,
      appResult: Result,
      appSecondResult: SecondResult
    }  
  }
</script>

