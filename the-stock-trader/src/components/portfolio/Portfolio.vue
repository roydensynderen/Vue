<template>
    <div>
        <appStock v-for="stock in stocks" :stock="stock"></appStock>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Stock from './Stock.vue'

    export default {
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        },
        components: {
            appStock: Stock
        }
    }
</script>
