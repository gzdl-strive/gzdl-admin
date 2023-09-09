# Button按钮

## 基础用法
:::demo 使用`size`、`color`、`plain`、`round`属性来定义Button样式
```vue
<template>
  <section>
    <div class="basic__item">
      <GButton>默认按钮</GButton>
      <GButton color="green">绿色按钮</GButton>
      <GButton color="red">红色按钮</GButton>
      <GButton color="purple">紫色按钮</GButton>
      <GButton color="yellow">黄色按钮</GButton>
      <GButton color="gray">灰色按钮</GButton>
    </div>
    <div class="basic__item">
      <GButton color="blue" plain>朴素按钮</GButton>
      <GButton color="green" plain>绿色按钮</GButton>
      <GButton color="red" plain>红色按钮</GButton>
      <GButton color="purple" plain>紫色按钮</GButton>
      <GButton color="yellow" plain>黄色按钮</GButton>
      <GButton color="gray" plain>灰色按钮</GButton>
    </div>
    <div class="basic__item">
      <GButton round>圆角按钮</GButton>
      <GButton color="green" round>绿色按钮</GButton>
      <GButton color="red" round>红色按钮</GButton>
      <GButton color="purple" round>紫色按钮</GButton>
      <GButton color="yellow" round>黄色按钮</GButton>
      <GButton color="gray" round>灰色按钮</GButton>
    </div>
    <div class="basic__item">
      <GButton icon="edit"></GButton>
      <GButton color="green" icon="message" round></GButton>
      <GButton color="red" icon="search" plain></GButton>
      <GButton color="purple" icon="check"></GButton>
      <GButton color="yellow" icon="edit"></GButton>
      <GButton color="gray" icon="message"></GButton>
    </div>
  </section>
</template>
```
:::

## 禁用状态
:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。
```vue
<template>
  <section>
    <div class="basic__item">
      <GButton disabled>默认按钮</GButton>
      <GButton color="green" disabled>绿色按钮</GButton>
      <GButton color="red" disabled>红色按钮</GButton>
      <GButton color="purple" disabled>紫色按钮</GButton>
      <GButton color="yellow" disabled>黄色按钮</GButton>
      <GButton color="gray" disabled>灰色按钮</GButton>
    </div>
    <div class="basic__item">
      <GButton color="blue" plain disabled>朴素按钮</GButton>
      <GButton color="green" plain disabled>绿色按钮</GButton>
      <GButton color="red" plain disabled>红色按钮</GButton>
      <GButton color="purple" plain disabled>紫色按钮</GButton>
      <GButton color="yellow" plain disabled>黄色按钮</GButton>
      <GButton color="gray" plain disabled>灰色按钮</GButton>
    </div>
  </section>
</template>
```
:::

## 图标按钮
:::demo 设置icon属性即可
```vue
<template>
  <section>
    <div class="basic__item">
      <GButton icon="edit"></GButton>
      <GButton icon="message" round></GButton>
      <GButton icon="search" plain></GButton>
      <GButton icon="check"></GButton>
      <GButton icon="edit"></GButton>
      <GButton icon="message">默认</GButton>
    </div>
  </section>
</template>
```
:::

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|:----:|:----:|:----:|:----:|:----:|
| size | 尺寸 | string | small/medium/large | medium |
| color | 颜色 | string | blue/green/red/gray/purple/yellow | blue |
| plain | 是否朴素按钮 | boolean | ———— | false |
| round | 是否圆角按钮 | boolean | ———— | false |
| disabled | 是否禁用按钮 | boolean | ———— | false |
| icon | 图标类名 | string | ———— | ———— |

<style>
.basic__item:nth-child(n + 2) {
  margin-top: 16px;
}

.basic__item button {
  margin: 0 5px;
}
</style>