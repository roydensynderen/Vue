new Vue({
    el: '#app',
    data: {
        counter: 0,
        secondCounter: 0
    },
    methods: {
        result: function() {
            console.log('Method');
            return this.counter > 5 ? '> 5' : '< 5';
        }
    },
    watch: {
        counter: function(value) {
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 2500);
        }
    },
    computed: {
        output: function() {
            console.log('Computed');
            return this.counter > 5 ? '> 5' : '< 5';
        }
    }
})