<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
      <Types :value.sync="record.type"/>
      <div class="notes">
        <FromItem @update:value="onUpdateNotes"
                  fiel-name="备注"
                  placeholder="在这里输入备注"/>
      </div>
      <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import NumberPad from "@/components/Money/NumberPad.vue";
  import Types from "@/components/Money/Types.vue";
  import FromItem from "@/components/Money/FromItem.vue";
  import Tags from "@/components/Money/Tags.vue";
  import {Component,Watch} from "vue-property-decorator";
  import recordListModel from "@/models/recordListModel";
  import tagListModel from "@/models/tagListModel";

  const recordList = recordListModel.fetch();
  const tagList = tagListModel.fetch()

  @Component({
    components:{
      NumberPad,
      Types,
      FromItem,
      Tags}
  })
  export default class Money extends Vue{
    tags=tagList;
    record: RecordItem = {
      tags:[],
      notes:'',
      type:'',
      amount:0
    };
    recordList: RecordItem[] =JSON.parse(window.localStorage.getItem("recordList") || '[]');



    onUpdateTags(value: string[]){
      this.record.tags = value;
    }
    onUpdateNotes(value: string){
      this.record.notes = value;
    }
    onUpdateAmount(value: string){
      this.record.amount = parseFloat(value);
    }
    saveRecord(){
      recordListModel.create(this.record)
    }
    @Watch('recordList')
    onRecordListChange(){
      window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
    }
  }


</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>
<style lang="scss" scoped>
  @import "../assets/style/helper.scss";
  .notes{
    padding: 12px 0;
  }
</style>