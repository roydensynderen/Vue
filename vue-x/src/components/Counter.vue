<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        methods: {
            // increment() {
            //     //using mutation, must run synchronously
            //     this.$store.commit('increment')
            // },
            // decrement() {
            //     //using mutation
            //     this.$store.commit('decrement')
            // }
            ...mapMutations([
                'increment',
                'decrement'
            ])
        }    
    }
</script>

