<template>
  <div class="container">
    <appHeader :quoteCount='quotes.length' :maxQuotes='maxQuotes'></appHeader>
    <appNewQuote @quoteAdded='newQuote'></appNewQuote>
    <appQuoteGrid :quotes='quotes' @quoteDeleted='deleteQuote'></appQuoteGrid>

    <div class='row'>
      <div class='col-sm-12 text-center'>
        <div class='alert alert-info'>Info: Click on a Quote to delete it!</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid';
import NewQuote from './components/NewQuote';
import Header from './components/Header';

export default {
  data: function() {
    return {
      quotes: [
        'First quote'
      ],
      maxQuotes: 10
    }
  },
  methods: {
    newQuote: function(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert('Sorry!Exceeded max amount of quotes');
      }
      this.quotes.push(quote);    
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1); 
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header
  }
}
</script>

<style>

</style>
