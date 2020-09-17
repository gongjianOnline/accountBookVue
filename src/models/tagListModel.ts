const localStorageKeyName = 'tagList'
type Tag = {
  id: string;
  name: string;
}
type tagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | "duplicated"; //联合类型
  update: (id: string,name: string) => 'success' | 'not found' |'duplicates';
  save: () => void;
  remove: (id: string) => boolean;
}

const tagListModel: tagListModel = {
  data:[],
  fetch(){
    this.data = JSON.parse(window.localStorage.getItem('localStorageKeyName') || '[]');
    return this.data
  },
  create(name: string){
    const names = this.data.map(item=>item.name);
    if(names.indexOf(name)>=0){
      return 'duplicated'
    }
    this.data.push({id:name,name:name});
    this.save();
    return 'success';
  },
  update(id,name){
    const idList = this.data.map(item=>item.id);
    if(idList.indexOf(id) >= 0){
      const names = this.data.map(item => item.name);
      if(names.indexOf(name) >= 0){
        return "duplicates"
      }else{
        const tag = this.data.filter(item=>item.id===id)[0];
        console.log("进入了修改")
        tag.name = name;
        tag.id = name;
        this.save();
        return 'success'
      }
    }else{
      return "not found"
    }
  },
  save(){
    window.localStorage.setItem('localStorageKeyName',JSON.stringify(this.data));
    console.log(JSON.stringify(window.localStorage.getItem('localStorageKeyName')))
  },
  remove(id: string){
    let index = -1;
    for(let i=0;i<this.data.length;i++){
      if(this.data[i].id === id){
        index = i
      }
      break;
    }
    this.data.splice(index,1);
    this.save()
    return true
  }
}
export default tagListModel;