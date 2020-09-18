type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number; //数据类型
  createdAt?: Date; //类 /构造函数
}
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
interface Window {
  tagList: Tag[];
  createTag: (name: string) => void;
  removeTag: (id: string) => boolean;
  updateTag: (id: string,name: string) => 'success' | 'not found' |'duplicates';
  findTag: (id: string) => Tag | undefined;
  recordList: RecordItem[];
  createRecord: (record: RecordItem) => viod;

}