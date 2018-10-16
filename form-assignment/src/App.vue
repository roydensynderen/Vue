<template>
    <div class="container">
        <form v-if='!submittedForm'>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <form>
                      <appFullName v-model='fullName'></appFullName>
                      <input type="text" v-model='email' placeholder="E-mail Address">
                      <input type="text" v-model='password' placeholder="Password">
                      <p>Would you like to store your data?</p>
                      <div>
                        <input type="radio"
                               value="Yes"
                               v-model="storeData">
                        <label for="choice1">Yes</label>

                        <input type="radio" 
                               value="No"
                               v-model="storeData">
                        <label for="choice2">No</label>
                      </div>
                      <button type='submit' 
                              @click.prevent='submitForm()'
                              class='btn btn-primary'>Submit</button>
                    </form>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if='submittedForm'>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './components/FullName.vue';

    export default {
      data() {
        return {
          fullName: 'Royden Tan',
          password: '',
          storeData: 'Yes',
          submittedForm: false
        }
      },
      methods: {
        submitForm: function() {
          return this.submittedForm = true;
        }
      },
      components: {
        appFullName: FullName
      }
    }
</script>

<style>
</style>
