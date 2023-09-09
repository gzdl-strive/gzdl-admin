# Layout布局

## 基础布局
使用单一分栏创建基础的栅格布局
:::demo 通过使用GRow和GCol组件，并使用GCol组件的span属性，我们可以自由组合布局
```vue
<template>
  <section>
    <GRow>
      <GCol></GCol>
    </GRow>
    <GRow>
      <GCol :span="8">123</GCol>
      <GCol :span="8">456</GCol>
      <GCol :span="8">789</GCol>
    </GRow>
    <GRow>
      <GCol :span="6">123</GCol>
      <GCol :span="6">456</GCol>
      <GCol :span="6">789</GCol>
      <GCol :span="6">abc</GCol>
    </GRow>
  </section>
</template>
```
:::

## 分栏间隔
分栏之间存在间隔
:::demo GRow提供gutter属性来指定分栏之间的间隔大小
```vue
<template>
  <section>
    <GRow :gutter="6">
      <GCol :span="8">123</GCol>
      <GCol :span="8">456</GCol>
      <GCol :span="8">789</GCol>
    </GRow>
  </section>
</template>
```
:::

## 对齐方式
通过`flex`布局对分栏进行灵活对齐
:::demo GRow提供justify属性来指定分栏的排版方式
```vue
<template>
  <section>
    <GRow :gutter="16">
      <GCol :span="8">123</GCol>
      <GCol :span="8">456</GCol>
    </GRow>
    <GRow :gutter="16" justify="end">
      <GCol :span="8">123</GCol>
      <GCol :span="8">456</GCol>
    </GRow>
    <GRow :gutter="16" justify="center">
      <GCol :span="8">123</GCol>
      <GCol :span="8">456</GCol>
    </GRow>
    <GRow :gutter="16" justify="between">
      <GCol :span="8">123</GCol>
      <GCol :span="8">456</GCol>
    </GRow>
    <GRow :gutter="16" justify="around">
      <GCol :span="8">123</GCol>
      <GCol :span="8">456</GCol>
    </GRow>
  </section>
</template>
```
:::

## API
### GRow API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|:----:|:----:|:----:|:----:|:----:|
| gutter | 栅格间隔 | number | ———— | 0 |
| justify | 对齐方式 | string | start/end/center/between/around | start |

### GCol API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|:----:|:----:|:----:|:----:|:----:|
| span | 栅格占据的列数 | number | ———— | 24 |

<style>
.g-row:nth-child(n + 2) {
  margin-top: 16px;
}

.g-col-24 {
  height: 35px;
}

.g-col {
  padding: 5px;
  border-radius: 5px;
}

.g-col:nth-child(even) {
  background-color: #d5dce5;
}

.g-col:nth-child(odd) {
  background-color: #e6e9f1;
}
</style>