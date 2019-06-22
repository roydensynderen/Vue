new Vue({
    el: '#app',
    data: {
        // attachRed: false,
        color: 'gray',
        width: 100
    },
    computed: {
        // switchColors: function() {
        //     return {
        //         red: this.attachRed,
        //         blue: !this.attachRed
        //     }
        // }
        myStyle: function() {
            return {
                backgroundColor: this.color,
                width: this.width + 'px'
            };
        }
    }
})