<template>
  <div class="numberPad">
    <div class="output">{{output}}</div>
    <div class="buttons clearfix" @click="inputContent">
      <button @click="output+=1">1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="Ok">Ok</button>
      <button class="zreo">0</button>
      <button>.</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class Types extends Vue {
    output = "0";
    /*数字键盘*/
    inputContent(event: MouseEvent){
      //强制制定类型
      const button = (event.target as HTMLButtonElement);
      const input = button.textContent as string;
      if(input === "删除"){
        this.remove()
        return
      }
      if(input === "清空"){
        this.clear()
        return;
      }
      if(input === "Ok"){
        this.Ok()
        return;
      }
      if(this.output.length === 16){return}
      if(event.target){
        if(this.output === '0'){
          if('01234569'.indexOf(input)>=0){
            this.output = input;
            return;
          }else{
            this.output += input;
          }
          return;
        }
        if(this.output.indexOf('.')>=0  && input === "."){return;}
        this.output += input;
      }

    }
    /*操作键盘*/
    remove(){
      if(this.output.length === 1){
        this.output = "0"
      }else{
        this.output = this.output.slice(0,-1);
      }
    }
    clear(){
      this.output = "0"
    }
    Ok(){
      this.$emit("update:value",this.output);
      this.$emit('submit',this.output);
      this.output = "0"
      console.log("完成按钮,待开发");
    }





  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/helper";
  .numberPad{
    .output{
      @extend %clearFix;
      font-size: 36px;
      font-family: Consolas,monospace;
      padding: 9px 16px;
      text-align: right;
      box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      height: 72px;
  }
    .buttons{
      @extend %clearFix;
      > button{
        width: 25%;
        height: 64px;
        float: left;
        background:transparent;
        border: none;
        &.Ok{
          height: 64*2px;
          float: right;
      }
        &.zreo{
          width: 25*2%;
      }
        $bg:#f2f2f2;
        &:nth-child(1){
          background: $bg;
      }
        &:nth-child(2),&:nth-child(5){
          background: darken($bg,4%);
      }
        &:nth-child(3),&:nth-child(6),&:nth-child(9){
          background: darken($bg,4*2%);
      }
        &:nth-child(4),&:nth-child(7),&:nth-child(10){
          background: darken($bg,4*3%);
      }
        &:nth-child(8),&:nth-child(11),&:nth-child(10),&:nth-child(13){
          background: darken($bg,4*4%);
      }
        &:nth-child(14){
          background: darken($bg,4*5%);
      }
        &:nth-child(12){
          background: darken($bg,4*6%);
      }
    }
  }
  }
</style>