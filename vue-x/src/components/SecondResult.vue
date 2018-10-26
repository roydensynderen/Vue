<template>
    <div>
        <p>Counter is {{ doubleCounter }}</p>
        <p>Number of clicks: {{ clicksCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        //another way to do it
        //mapGetters({
            // propertyName: 'doubleCounter'
        // })

        computed: {
            ...mapGetters([
                'doubleCounter',
                'clicksCounter'
            ])
        }
    }  
</script>