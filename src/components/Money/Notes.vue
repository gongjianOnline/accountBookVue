<template>
  <div>
    <label class="notes">
      {{value}}
      <span class="name">备注</span>
      <input type="text"
             placeholder="在这输入备注"
             :value="value"
             @input="onInput">
    </label>
  </div>
</template>

<script>
  import Vue from "vue";
  import {Component} from "vue-property-decorator"
  @Component
  export default class Notes extends Vue{
    value = "";
    onInput(event){
      const input = event.target;
      this.value = input.value;
    }

  }
</script>

<style lang="scss" scoped>
  .notes {
    font-size: 14px;
    background: #f5f5f5;
    display: block;
    padding: 0 16px;
    display: flex;
    align-items: center;

    .name {
      padding-right: 16px;
    }

    input {
      /*padding: 16px 0;*/
      height: 64px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
</style>