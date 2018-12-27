const app = new Vue({
    el: '#app',
    data: {
      name: '',
      age: 0
    },
    mounted () {
      if (localStorage.name) this.name = localStorage.name;
      if (localStorage.age) this.age = localStorage.age;
    },
    methods: {
      persist () {
        localStorage.name = this.name;
        localStorage.age = this.age;
        console.log('Agora finja que fiz mais coisas...');
      }
    }
  })