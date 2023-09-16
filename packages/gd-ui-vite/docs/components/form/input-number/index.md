# Input-Number数字输入框

## 基础用法
:::demo
```vue
<template>
  <GInputNumber placeholder="请输入大小" />
</template>
```
:::

## 控制按钮
`controls`属性用于控制是否显示控制按钮，默认显示
:::demo 
```vue
<template>
  <GInputNumber placeholder="请输入大小" :controls="false" />
</template>
```
:::

## 禁用状态
:::demo `disabled`属性用于控制输入，禁止用户操作
```vue
<template>
  <GInputNumber placeholder="请输入" disabled v-model="count" />
</template>

<script>
export default {
  data() {
    return {
      count: 1
    }
  }
}
</script>
```
:::

## 步长
通过设置`step`属性为整数，可以控制步长.
:::demo
```vue
<template>
  <span class="count">count: {{ count }}</span>
  <span class="count">step: {{ step }}</span>
  <GButton @click="step++" class="count" size="small">step++</GButton>
  <GInputNumber placeholder="大小" :step="step" v-model="count" />
</template>

<script>
export default {
  data() {
    return {
      count: 1,
      step: 2
    }
  }
}
</script>
```
:::

## 尺寸
三种尺寸可供选择
:::demo 指定size为`small`、`medium(默认)`、`large`，可以修改数字输入框的大小
```vue
<template>
  <GInputNumber placeholder="small尺寸" size="small" />
  <GInputNumber placeholder="medium(默认)尺寸" size="medium" />
  <GInputNumber placeholder="large尺寸" size="large" />
</template>
```
:::

## min/max限制 
通过`min`、`max`属性可控制输入的数值范围大小
:::demo 当输入的数字超过范围大小，会自动限制到范围许可中，默认`min(-Infinity)`、`max(Infinity)`，当数值等于范围边界值时，对应的控制按钮会被禁用. 并且，初始化时会执行一次范围限制.
```vue
<template>
  <span class="count">初始值: {{ initCount }}</span>
  <span class="count">count值: {{ count }}</span>
  <GInputNumber
    v-model="count"
    :max="10"
    :min="3"
    :step="3"
  />
</template>

<script>
export default {
  data() {
    const initCount = 1;
    return {
      initCount,
      count: initCount
    }
  }
}
</script>
```
:::

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|:----:|:----:|:----:|:----:|:----:|
| v-model | 绑定值 | number | ———— | ———— |
| placeholder | 数字输入框占位文本 | string | ———— | 请输入 |
| disabled | 禁用数字输入框 | boolean | ———— | false |
| size | 尺寸 | string | small/medium/large | medium |
| controls | 是否使用控制按钮 | boolean | ———— | true |
| step | 计数器步长 | number | ———— | 1 |
| min | 最小值 | number | ———— | -Infinity |
| max | 最大值 | number | ———— | Infinity |

<style>
.g-input-number {
  margin: 0 8px;
}
.count {
  margin-right: 16px;
}
</style>