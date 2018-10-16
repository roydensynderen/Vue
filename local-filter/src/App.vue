<template>
  <div class='container'>
    <div class='row'>
      <div class='col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3'>
        <h1>Filters and Mixins</h1>
        <p>{{ text | toUppercase | to-lowercase }}</p>
        <hr>
        <button @click="fruits.push('Berries')">Add New Item</button>
        <input v-model='filterText'> 
        <ul>
          <li v-for='fruit in filteredFruits'>{{ fruit }}</li>
        </ul>
        <hr>
        <appList></appList>
      </div>
    </div>
  </div>
</template>

<script>
import List from './components/List';
import { fruitMixin } from './fruitMixin.js';

export default {
  data() {
    return {
      text: 'Hello there!'
    }
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  components: {
    appList: List
  },
  mixins: [fruitMixin]
}
</script>

<style>
</style>
