<template>
  <div class="home">
    <Header></Header>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,Footer,Header
  },
  created () {
    
  }
}
</script>
