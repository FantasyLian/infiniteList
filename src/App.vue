<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
html, body {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

#nav {
  padding: 10px;
  position: fixed;
  width: 100%;
  background-color: #fff;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
