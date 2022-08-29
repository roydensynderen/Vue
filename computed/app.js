const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  watch: {
    // name(value) {
    //   this.fullName = value + ' ' + 'Tan';
    // }
  },
  computed: {
    fullName() {
      if (this.name != '') return this.name + ' ' + 'Tan';
    }
  },
  methods: {
    outputFullName() {
      if (this.name != '') return this.name + ' ' + 'Tan';
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
