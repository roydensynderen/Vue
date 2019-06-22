Vue.component('hello', {
    template: '<h1>Hello im a component</h1>'
});

var vm1 = new Vue({
    data: {
        title: 'The Vue JS Instance',
        showParagraph: false
    },
    methods: {
        show: function() {
            this.showParagraph = true;
            this.updateTitle('The VueJS Instance (Updated)');
            this.$refs.myButton.innerText = 'Test';
        },
        updateTitle: function(title) {
            this.title = title;
        }
    },
    computed: {
        lowerCaseTitle: function() {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function(value) {
            alert('Title changed, new value: ' + value);
        }
    }
});

vm1.$mount('#app1');

// setTimeout(function() {
//     vm1.title = 'Changed by timer';
// }, 3000)

var vm2 = new Vue({
    el: '#app2',
    data: {
        title: 'The second instance'
    },
    methods: {
        onChange: function() {
            vm1.title = 'Changed!';
        }
    }
});

var vm3 = new Vue({
    template: '<h1>Hello!</h1>'
})

// vm3.$mount('#app3');

// OR

// vm3.$mount();
// document.getElementById('app3').appendChild(vm3.$el);