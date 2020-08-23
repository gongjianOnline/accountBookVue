<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"></Icon>
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label"></Icon>
      标签</router-link>
    <router-link to="/statistacs" class="item" active-class="selected">
      <Icon name="chart"></Icon>
      统计</router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
  @import "../assets/style/helper.scss";
  nav{
    display: flex;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
    flex-direction: row;
    >.item{
      width: 33.333%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 2px 0;
      >.icon{
        width: 32px;
        height: 32px;
      }
    }
    >.selected{
      color: $color-highlight;
    }
  }
</style>