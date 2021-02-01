### Vue 和 React 相同点非常多：

```
1.都使用 Virtural DOM
2.都使用组件化思想，流程基本一致
3.都是响应式，推崇单向数据流
4.都有成熟的社区，都支持服务端渲染
```

```
Vue和React实现原理和流程基本一致，都是使用Virtual DOM + Diff算法。不管是Vue的template模板 + options api写法，还是React的Class或者Function（js 的class写法也是function函数的一种）写法，底层最终都是为了生成render函数，render函数执行返回VNode（虚拟DOM的数据结构，本质上是棵树）。当每一次UI更新时，总会根据render重新生成最新的VNode，然后跟以前缓存起来老的VNode进行比对，再使用Diff算法（框架核心）去真正更新真实DOM（虚拟DOM是JS对象结构，同样在JS引擎中，而真实DOM在浏览器渲染引擎中，所以操作虚拟DOM比操作真实DOM开销要小的多）。

Vue和React通用流程：vue template/react jsx -> render函数 -> 生成VNode -> 当有变化时，新老VNode diff -> diff算法对比，并真正去更新真实DOM。

核心还是Virtual DOM，为什么Vue和React都选择Virtual DOM（React首创VDOM，Vue2.0开始引入VDOM）？，个人认为主要有以下几点：

减少直接操作DOM。框架给我们提供了屏蔽底层dom书写的方式，减少频繁的整更新dom，同时也使得数据驱动视图
为函数式UI编程提供可能（React核心思想）
可以跨平台，渲染到DOM（web）之外的平台。比如ReactNative，Weex
```

### 不同点

```
1.核心思想不同
Vue早期定位是尽可能的降低前端开发的门槛（这跟Vue作者是独立开发者也有关系）。所以Vue推崇灵活易用（渐进式开发体验），数据可变，双向数据绑定（依赖收集）。

React早期口号是Rethinking Best Practices。背靠大公司Facebook的React，从开始起就不缺关注和用户，而且React想要做的是用更好的方式去颠覆前端开发方式（事实上跟早期jquery称霸前端，的确是颠覆了）。所以React推崇函数式编程（纯组件），数据不可变以及单向数据流。函数式编程最大的好处是其稳定性（无副作用）和可测试性（输入相同，输出一定相同），所以通常大家说的React适合大型应用，根本原因还是在于其函数式编程。

由于两者核心思想的不同，所以导致Vue和React许多外在表现不同（从开发层面看）。

1.1核心思想不同导致写法差异
Vue推崇template（简单易懂，从传统前端转过来易于理解）、单文件vue
React推崇JSX、HOC、all in js
```

```
2.响应式原理不同
Vue
Vue依赖收集，自动优化，数据可变。
Vue递归监听data的所有属性,直接修改。
当数据改变时，自动找到引用组件重新渲染。

React
React基于状态机，手动优化，数据不可变，需要setState驱动新的State替换老的State。
当数据改变时，以组件为根目录，默认全部重新渲染
```

```
3.diff算法不同
Vue基于snabbdom库，它有较好的速度以及模块机制。Vue Diff使用双向链表，边对比，边更新DOM。

React主要使用diff队列保存需要更新哪些DOM，得到patch树，再统一操作批量更新DOM。
```

```
4.事件机制不同
Vue

Vue原生事件使用标准Web事件
Vue组件自定义事件机制，是父子组件通信基础
Vue合理利用了snabbdom库的模块插件

React

React原生事件被包装，所有事件都冒泡到顶层document监听，然后在这里合成事件下发。基于这套，可以跨端使用事件机制，而不是和Web DOM强绑定。
React组件上无事件，父子组件通信使用props
```
