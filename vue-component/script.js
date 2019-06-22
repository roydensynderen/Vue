var data = { status: 'Critical' };
//Putting it into a variable changes all component
//Putting it in the component as an object changes only internally

//Vue.component = global component
//if want to use locally, store component into variable

// e.g
// var cmp = {
//     ~
// }

// inside instance:
// components: {
//     'my-cmp': cmp
// }

Vue.component('my-cmp', {
    data: function() {
        return data
    },
    template: '<p>Server status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
    methods: {
        changeStatus: function() {
            this.status = 'Normal';
        }
    }
})

new Vue({
    el: '#app'
});