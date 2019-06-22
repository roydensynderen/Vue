new Vue({
    el: '#exercise',
    data: {
        name: 'Royden',
        age: 26,
        image: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'
    },
    methods: {
        random: function() {
            return Math.floor(Math.random() * 10);
        }
    }
})