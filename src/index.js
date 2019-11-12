import MVVM from './packages/MVVM'

// const vm = {$data: {a: 11}}
// let c = new Compiler("#app", vm);
// console.log(c.el)
// @ts-ignore
// window.vm = vm

const vm = new MVVM({
  el: document.getElementById('app'),
  data: {
    a: 111
  },
  methods: {
    plus() {
      //@ts-ignore
      this.a++;
    }
  }
})

// @ts-ignore
window.vm = vm
