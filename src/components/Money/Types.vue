<template>
  <div>
    <ul class="types">
      <li :class="type==='-'&&'selected'" @click="selectType('-')">支出</li>
      <li :class="type==='+'&&'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Types extends Vue {
    @Prop({default:'-'}) readonly  value!: string ;
    // @Prop(String) xxx: string | undefined;
    // String告诉vue xxx是个Number;（运行时报错）
    // Prop 告诉Vue xxx不是data 是 prop;
    // number | undefined (编译报错)
    selectType(type: string) {
      if (type !== "-" && type !== "+") {
        throw new Error("type in unknown");
      }
      this.$emit('update:value',this.value)
    }


  }


</script>

<style lang="scss" scoped>
  .types {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;

    > li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &.selected::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }
</style>