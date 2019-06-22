new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert: function() {
            alert('Alert!');
        },
        value: function(event) {
            return event.target.value;
        }
    }
})