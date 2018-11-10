<template>
  <div>
    <h1>This is main page</h1>
    <button @click="goToProducts">Products</button>
  </div>
</template>

<script>
  export default {
    methods: {
      goToProducts() {
        return this.$router.push('/products')
      }
    }
  }
</script>


