<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="(item,index) in dataSource"
          :class="{'selected':(selectedTags.indexOf(item)>-1)}"
          :key="index"
          @click="toggle(item)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component,Prop} from "vue-property-decorator";

 @Component
 export default class Tags extends Vue{
  @Prop() readonly dataSource: string[] | undefined;
  selectedTags: string[] = [];
  toggle(item: string){
    const index = this.selectedTags.indexOf(item);
    if(index>=0){
      this.selectedTags.splice(index,1)
    }else{
      this.selectedTags.push(item)
    }
    this.$emit('update:value',this.selectedTags)

  }
  create(){
    const name = window.prompt('请输入标签名');
    if(name === ''){
      window.alert('标签名不能为空')
    }else{
      if(this.dataSource){
        //不能改外部数据(不推荐)
        // this.dataSource.push(name as string);
        if(this.dataSource){
          this.$emit('update:dataSource',[...this.dataSource,name])
        }
      }
    }
  }
 }

</script>

<style lang="scss" scoped>
  .tags {
    flex-grow: 1;
    font-size: 14px;
    padding: 16px;
    display: flex;
    flex-direction: column-reverse;
    background: white;
    > .current {
      display: flex;
      flex-wrap: wrap;
      overflow: auto;

      > li {
        $bg:#d9d9d9;
        background: $bg;
        height: 24px;
        line-height: 24px;
        border-radius: (24px/2);
        padding: 0 16px;
        margin-right: 12px;
        cursor: pointer;
        &.selected{
          background: darken($bg,50%);
          color: white;
        }
      }
    }

    > .new {
      padding-top: 16px;

      button {
        background: transparent;
        border: none;
        border-bottom: 1px solid;
        color: #999;
        padding: 0 4px;
      }
    }
  }
</style>