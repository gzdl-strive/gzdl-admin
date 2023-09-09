# Link文字标签

## 基础用法
基础文字链接用法
:::demo 使用`color`属性来定义文字链接基础样式
```vue
<template>
  <section>
    <div class="basic__item">
      <GLink>默认按钮</GLink>
      <GLink color="blue">主要按钮</GLink>
      <GLink color="green">成功按钮</GLink>
      <GLink color="yellow">警告按钮</GLink>
      <GLink color="red">危险按钮</GLink>
      <GLink color="gray">信息按钮</GLink>
      <GLink color="purple">其它按钮</GLink>
    </div>
  </section>
</template>
```
:::

## 禁用状态
文字链接不可用状态
:::demo 使用`disabled`属性来定义文字链接禁用状态
```vue
<template>
  <section>
    <div class="basic__item">
      <GLink disabled>默认按钮</GLink>
      <GLink color="blue" disabled>主要按钮</GLink>
      <GLink color="green" disabled>成功按钮</GLink>
      <GLink color="yellow" disabled>警告按钮</GLink>
      <GLink color="red" disabled>危险按钮</GLink>
      <GLink color="gray" disabled>信息按钮</GLink>
      <GLink color="purple" disabled>其它按钮</GLink>
    </div>
  </section>
</template>
```
:::

## 下划线
文字链接下划线
:::demo 使用`underline`属性来定义文字链接下划线
```vue
<template>
  <section>
    <div class="basic__item">
      <GLink>有下划线按钮</GLink>
      <GLink :underline="false">无下划线按钮</GLink>
    </div>
  </section>
</template>
```
:::

## 图标
携带图标的文字链接可以增强辨识度
:::demo 使用`icon`属性来定义文字链接图标
```vue
<template>
  <section>
    <div class="basic__item">
      <GLink icon="search">链接</GLink>
      <GLink icon="edit">链接</GLink>
      <GLink icon="check">链接</GLink>
      <GLink icon="message">链接</GLink>
    </div>
  </section>
</template>
```
:::

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|:----:|:----:|:----:|:----:|:----:|
| color | 颜色 | string | blue/green/red/gray/purple/yellow | default |
| disabled | 是否禁用状态 | boolean | ———— | false |
| underline | 是否下划线 | boolean | ———— | true |
| icon | 图标类名 | string | ———— | ———— |
| href | 原生href属性 | string | ———— | ———— |

<style>
.basic__item:nth-child(n + 2) {
  margin-top: 16px;
}

.basic__item a {
  margin: 0 5px;
}
</style>