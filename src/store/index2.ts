/**全局变量太多,过度依赖window(优化)***/
import recirdStore from "@/store/recirdStore";
import tagStore from "@/store/tagStore";


const store={
  ...recirdStore,
  ...tagStore
}
export  default store