<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "./assets/style/helper.scss";
@import "./assets/style/reset.scss";
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;;
}
body{

}
a{
  text-decoration: none;
  color: inherit;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  line-height: 1.5;
  font-size: 16px;
  font-family: $font-hei;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
