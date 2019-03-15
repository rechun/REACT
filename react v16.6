#react V16.6动态import，lazy(),Suspense,Error, boundaries

##  一、动态import
		动态 import 主要用延迟请求
当触发点击事件的时候，才会去引入需要的方法或者是对象，并且由于 Promise API 的特性，可以使用 `Promise.all`  `Promise.race` 这种 API，进行并行加载，然后在 then() 回调中调用方法，非常方便

## 二、 React.lazy() 和 Suspense

 1. React.lazy() 

动态 import 主要应用场景是延迟加载方法，对于组件来说，并不是很适用，但是 `React.lazy` 对于组件的加载则是有比较大的帮助。
```javascript
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <OtherComponent />
    </div>
  );
}
```
摒弃了之前的 `import X from 'x'` 的静态引入方式。
同样的，这个变动会使得在组件渲染的时候，再去加载包含引入路径的组件。`React.lazy(()=>{})` 这个方法的回调中其实就是包含了一个动态 import

 2. Suspense
要使用 `Suspense`，需要从 react 中 import:
```javascript
import React, { Component, Suspense } from 'react';
```
既然是延迟加载，就会有一个加载过程，之前在渲染的时候，我们基本都是自顶一个一个 `<Loading>` 组件，然后通过变量控制进行操作，如果加载完成，则取消掉 `<Loading>` 组件。
既然是延迟加载，就一定会有一个loading的过程，而 `Suspense` 正是完成这个过程。
```javascript
render() {
  return (
    <div className="App">
      <header className="App-header">
      <Suspense fallback={<div>Loading...</div>}>
        {this.renderList()}
      </Suspense>
      </header>
    </div>
  );
}
````Suspense`  使用的时候，`fallback`  一定是存在且有内容的， 否则会报错。

针对网络请求的 loading，我并没觉的这种 fallback 有什么帮助，因为他是组件加载的 loading，如果组件加载完了，那么再去 fallback 就没意义，也没效果了。

3. Error boundaries

