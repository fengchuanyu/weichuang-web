<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
    import Footer from '@/components/Footer.vue'
    import Header from '@/components/Header.vue'
    export default {
        components: {
            Footer,Header
        },
        created () {

        }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  background-color: rgb(249,250,254);
  padding-bottom: 30px;
}
</style>
