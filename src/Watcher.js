import Dep from './Dep';
import Utils from './Utils';
class Watcher {
  instance: any;
  exp: string;
  callback: Function;
  value: any;
  constructor(instance: any, exp: string, callback: Function) {
    this.instance = instance;
    this.exp = exp;
    this.callback = callback;
    this.value = this.getValue();
  }

  getValue() {
    Dep.target = this;
    // 获取内容时会调用get()方法，将Watcher注册上去
    let value = Utils.resolveValue(this.instance.$data, this.exp);
    Dep.target = null;
    return value;
  }

  update() {
    let newValue = Utils.resolveValue(this.instance.$data, this.exp);
    if (newValue !== this.value) {
      this.callback(newValue);
      this.value = newValue;
    }
  }
}

export default Watcher;
