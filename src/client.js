// 此文件运行在Node.js服务器上
import { createSSRApp } from 'vue'
// Vue的服务器渲染API位于`vue/server-renderer`路径
import { renderToString } from 'vue/server-renderer'

const app = createSSRApp({
  data: () => ({ count: 'hello world'}),
  template: `<button @click="count++">{{ count }}</button>`
})

export {
  renderToString,
  app
}