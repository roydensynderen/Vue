<template>
    <div>
        <p>Counter is {{ doubleCounter }}</p>
        <p>Number of click: {{ clicksCounter }}</p>
    </div>
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
                doubleCounter: types.DOUBLE_COUNTER,
                clicksCounter: types.CLICK_COUNTER
            })
        }
    }  
</script>