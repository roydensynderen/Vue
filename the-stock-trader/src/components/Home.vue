<template>
    <div>
        <h1>Trade or View Portfolio</h1>
        <h6>You may choose to save or load your data</h6>
        <h6>Click on 'End Day' to begin a New Day</h6>
        <hr>
        <p>Your funds: {{ funds | currency }}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds
            }
        }    
    }
</script>
