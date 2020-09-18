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
      <Tags :data-source="tags"/>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import NumberPad from "@/components/Money/NumberPad.vue";
  import Types from "@/components/Money/Types.vue";
  import FromItem from "@/components/Money/FromItem.vue";
  import Tags from "@/components/Money/Tags.vue";
  import {Component} from "vue-property-decorator";
  import store from "@/store/index2";

  @Component({
    components:{
      NumberPad,
      Types,
      FromItem,
      Tags}
  })
  export default class Money extends Vue{
    tags=store.tagList;
    record: RecordItem = {
      tags:[],
      notes:'',
      type:'',
      amount:0
    };
    recordList = store.recordList;

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
      store.createRecord(this.record)
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