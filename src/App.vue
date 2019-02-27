<template>
  <div id="app">
    <h1>Shaun Mossop Contact List App</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import ContactList from './components/ContactList.vue'

export default {
  name: 'app',
  components: {
    ContactList
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body{
  background-color: #EEEEEE;
  font-family: Montserrat, sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}
body, html{
  margin: 0;
  height: 100%;
}
#app{
  width: 50%;
}
nav{
  padding: 20px 20px 20px 0;
}
nav a{
  padding: 10px;
  text-decoration: none;
  background-color: #fff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}
h1{
  text-align: center;
}

</style>
