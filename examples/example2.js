function createReactive(obj, key, value) {
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      return value;
    },
    set(newVal) {
      // 更新绑定数据
      value = newVal;
    }
  });
}

const obj = {
  name: 'jerry',
};

// 遍历obj中的各个元素，并将他们添加到Reactive中
Object.keys(obj).forEach(key => {
  createReactive(obj, key, obj[key]);
});

// 尝试修改obj中元素的值

obj.name = 'lije';
