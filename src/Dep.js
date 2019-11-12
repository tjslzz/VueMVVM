import Watcher from './Watcher';

class Dep {
  subs: Watcher[];
  // 标记当前正在求值的 computed 函数
  static target: any = null;
  constructor() {
    this.subs = [];
  }

  addSub(watcher: Watcher) {
    this.subs.push(watcher);
  }

  notify() {
    // 调用Watcher实例中的CallBack方法
    this.subs.forEach(watcher => watcher.update());
  }
}

export default Dep;
