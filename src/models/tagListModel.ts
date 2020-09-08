const localStorageKeyName = 'tagList'
type tagListModel = {
  data: string[];
  fetch: () => string[];
  create: (name: string) => boolean;
  save: () => void;
}

const tagListModel: tagListModel = {
  data:[],
  fetch(){
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data
  },
  create(name: string){
    if(this.data.indexOf(name)>=0){
      return new Error('duplicated')
    }
    this.data.push(name);
    this.save();
    return true;
  },
  save(){
    window.localStorage.setItem('localStorageKeyName',JSON.stringify(this.data));
  }
}
export default tagListModel;