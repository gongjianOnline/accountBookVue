<template>
  <div>
    <label class="formItem">
      <span class="name">{{this.fielName}}</span>
      <input type="text"
             :value="value"
             @input="onValueChanged($event.target.value)"
             :placeholder="this.placeholder">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop, Watch} from "vue-property-decorator";
  @Component
  export default class Notes extends Vue{
    @Prop({required:true}) fielName!: string;
    @Prop() placeholder?: string;
    @Prop({default:""}) readonly value!: string;
    @Watch('value')
    onValueChanged(val: string){
      this.$emit('update:value',val);
    }
  }
</script>

<style lang="scss" scoped>
  .formItem {
    font-size: 14px;
    display: block;
    padding: 0 16px;
    display: flex;
    align-items: center;

    .name {
      padding-right: 16px;
    }

    input {
      /*padding: 16px 0;*/
      height: 40px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
</style>