<template>
    <p>Counter is {{ singleCounter }}</p>
</template>

<script>
    import { mapGetters } from 'vuex'
    import * as types from '../store/types'

    export default {
        //another way to do it
        //mapGetters({
            // propertyName: 'doubleCounter'
        // })

        computed: {
            ...mapGetters({
                singleCounter: types.SINGLE_COUNTER
            })
        }
    }  
</script>
