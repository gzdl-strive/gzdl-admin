# Radio单选框

## 基础用法——不使用v-model版
通过设置value为绑定值，配合input/change事件回调从而修改绑定值，label属性表示选项的值, name属性设置为一致值表示为一组单选.
:::demo
```vue
<template>
  <GRadio :value="pick1" label="A" name="pick1" @input="handleInput">选项A</GRadio>
  <GRadio :value="pick1" label="B" name="pick1" @input="handleInput">选项B</GRadio>
  <GRadio :value="pick1" label="C" name="pick1" @input="handleInput">选项C</GRadio>
</template>

<script>
export default {
  data() {
    return {
      pick1: "A"
    }
  },
  methods: {
    handleInput(val) {
      this.pick1 = val;
    }
  },
}
</script>
```
:::

## 基础用法——v-model简洁写法
通过v-model绑定变量，使用同一个变量进行绑定的，默认他们的name一致(为一组)。
:::demo
```vue
<template>
  <GRadio v-model="pick2"label="A">选项A</GRadio>
  <GRadio v-model="pick2"label="B">选项B</GRadio>
  <GRadio v-model="pick2"label="C">选项C</GRadio>
</template>

<script>
export default {
  data() {
    return {
      pick2: "C"
    }
  }
}
</script>
```
:::

## 禁用状态
:::demo `disabled`属性用于控制输入，禁止用户操作
```vue
<template>
  <GRadio v-model="pick3" :label="1" disabled>选项1</GRadio>
  <GRadio v-model="pick3" :label="2">选项2</GRadio>
  <GRadio v-model="pick3" :label="3">选项3</GRadio>
  <GRadio v-model="pick3" :label="4" disabled>选项4</GRadio>
</template>

<script>
export default {
  data() {
    return {
      pick3: 2
    }
  }
}
</script>
```
:::

## API
### Radio Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|:----:|:----:|:----:|:----:|:----:|
| value/v-model | 绑定值 | string/number/boolean | ———— | ———— |
| name | 原生name属性 | string | ———— | ———— |
| label | Radio的值 | string/number/boolean | ———— | ———— |
| disabled | 是否禁用 | boolean | ———— | false |

### Radio Events
| 事件名称 | 说明 | 回调参数 |
|:----:|:----:|:----:|
| input | 绑定值变化时触发的事件 | 选中的Radio label值 |
| change | 绑定值变化时触发的事件 | 选中的Radio label值 |