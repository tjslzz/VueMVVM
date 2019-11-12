const obj = {};
let name = 'jerry';
Object.defineProperty(obj, 'name', {
  enumerable: true, // 可枚举
  configurable: true, // 可配置
  get() {
    return name;
  },
  set(val) {
    name = val;
  }
});
obj.name;
obj.name = 'lije9';
