<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 class='text-center'>The Flashcard</h1>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <component :is='mode' @answered='answered($event)' @confirmed='mode = "appQuestion"' >

                </component>
            </div>
        </div>
    </div>
</template>

<script>
import Question from './components/Question';
import Answer from './components/Answer';

export default {
  data() {
    return {
      mode: 'appQuestion'
    }
  },
  methods: {
    answered(isCorrect) {
      if (isCorrect) {
        this.mode = 'appAnswer';
      } else {
        this.mode = 'appQuestion';
        alert('Wrong, please try again!');
      }
    }
  },
  components: {
    appQuestion: Question,
    appAnswer: Answer
  }
}
</script>

<style>

</style>
