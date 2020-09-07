<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li v-for="(item,index) in dataSource"
          :class="{selected:selectedTags.indexOf(item)>=0}"
          :key="index"
          @click="toggle(item)">{{item}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component,Prop} from "vue-property-decorator";

 @Component
 export default class Tags extends Vue{
  @Prop() dataSource: string[] | undefined;
  selectedTags: string[] = [];
  toggle(item: string){
    const index = this.selectedTags.indexOf(item);
    if(index>=0){
      this.selectedTags.splice(index,1)
    }
    this.selectedTags.push(item)
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
        & .selected{
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