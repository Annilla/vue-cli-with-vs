<template>
  <div id="app">
    <img src="~img/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <test></test>
    <test></test>
  </div>
</template>

<script>
import test from './components/test.vue'

export default {
  name: 'app',
  components: { test },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: () => {
    console.log('Test Async / Await');

    // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/async_function
    function resolveAfter2Seconds(x) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(x);
        }, 2000);
      });
    }

    async function add1(x) {
      var a = resolveAfter2Seconds(20);
      var b = resolveAfter2Seconds(30);
      return x + await a + await b;
    }

    add1(10).then(v => {
      console.log(v);  // prints 60 after 2 seconds.
    });
  }
}
</script>

<style lang="scss">
// Plugin CSS
@import '../../node_modules/vue-material/dist/vue-material.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
