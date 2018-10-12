<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br/>
          <button @click='selectedBtn="appBlue"' class="btn btn-primary">Load Blue Template</button>
          <button @click='selectedBtn="appGreen"' class="btn btn-success">Load Green Template</button>
          <button @click='selectedBtn="appRed"' class="btn btn-danger">Load Red Template</button>
        <hr>
        <component :is='selectedBtn'>
          <p>This is the common content</p>
          <p slot='blue'>Blue</p>
          <p slot='green'>Green</p>
          <p slot='red'>Red</p>
        </component>
        <!-- <app-blue>
          <p>Blue</p>
        </app-blue>
        <app-green>
          <p>Green</p>
        </app-green>
        <app-red>
          <p>Red</p>
        </app-red> -->
      </div>
    </div>
  </div>
</template>

<script>
  import Blue from './components/Blue.vue';
  import Green from './components/Green.vue';
  import Red from './components/Red.vue';

  export default {
    data: function() {
      return {
        selectedBtn: 'appBlue'
      }
    },
    components: {
      appBlue: Blue,
      appGreen: Green,
      appRed: Red
    }
  }
</script>

<style></style>
