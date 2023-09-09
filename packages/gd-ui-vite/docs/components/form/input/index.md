# Input输入框

## 基础用法
:::demo
```vue
<template>
  <GInput placeholder="请输入用户名" />
</template>
```
:::

## 禁用状态
:::demo `disabled`属性用于控制输入，禁用用户输入，禁用状态下无法进行清除操作(如果存在)、以及无法看到输入长度限制(如果存在)
```vue
<template>
  <GInput placeholder="请输入用户名" disabled />
  <GInput placeholder="请输入用户名" disabled show-word-limit :max-length="10" v-model="msg" />
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello'
    }
  }
}
</script>
```
:::

## 只读状态
:::demo `readonly`属性用于控制输入，无法写入, 只读状态下无法看到清空操作(如果存在)，可以看到输入限制
```vue
<template>
  <GInput placeholder="请输入用户名" readonly />
  <GInput placeholder="请输入用户名" readonly show-word-limit :max-length="10" v-model="msg" clearable />
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello'
    }
  }
}
</script>
```
:::

## 可清空
清空操作仅在指定`clearable`、非禁用、非只读状态、非密码框、框内有内容(值)的情况下，**悬浮/聚焦**到该输入框上才会显示清空操作按钮
:::demo 使用`clearable`属性可以得到一个可以执行清空操作的输入框
```vue
<template>
  <GInput placeholder="请输入用户名" clearable />
</template>
```
:::

## 密码框
:::demo 使用`show-password`属性可以创建一个密码输入框
```vue
<template>
  <GInput placeholder="请输入密码" show-password />
</template>
```
:::

## 文本域
用于输入多行文本信息，通过将`type`属性值设置为`textarea`.
使用`rows`属性可以指定文本域的行数
:::demo 指定`type`属性为`textarea`可以创建一个文本域，用于输入长文本
```vue
<template>
  <GInput placeholder="请输入密码" type="textarea" :rows="5" clearable />
</template>
```
:::

## 尺寸
三种尺寸可供选择
:::demo 指定size为`small`、`medium(默认)`、`large`，可以修改输入框的大小
```vue
<template>
  <GInput placeholder="small尺寸文本框" size="small" clearable />
  <GInput placeholder="默认尺寸文本框" clearable />
  <GInput placeholder="large尺寸文本框" size="large" clearable />
</template>
```
:::

## 输入最大长度限制
通过`max-length`属性可控制输入的最大字符个数
:::demo `maxlength`是原生属性，用于限制输入框字符长度，字符长度是用JavaScript字符串长度统计的。对于`text`和`textarea`的输入框，通过指定`show-word-limit`可以展示字数统计.
```vue
<template>
  <GInput
    v-model="name"
    placeholder="请输入文本"
    :max-length="12"
    show-word-limit
    clearable
  />
  <GInput
    v-model="content"
    placeholder="请输入内容"
    type="textarea"
    :max-length="30"
    show-word-limit
    clearable 
  />
</template>

<script>
export default {
  data() {
    return {
      name: "gzdl-strive",
      content: "这是一个组件库项目，用于学习......."
    }
  }
}
</script>
```
:::

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|:----:|:----:|:----:|:----:|:----:|
| type | 类型 | string | text/textarea/hidden... | text |
| v-model | 绑定值 | string | ———— | ———— |
| placeholder | 输入框占位文本 | string | ———— | 请输入 |
| disabled | 禁用输入框 | boolean | ———— | false |
| readonly | 输入框只读 | boolean | ———— | false |
| clearable | 是否可清空 | boolean | ———— | false |
| show-password | 切换为密码框 | boolean | ———— | false |
| size | 尺寸 | string | small/medium/large | medium |
| max-length | 最大输入长度 | number | ———— | -1 |
| show-word-limit | 是否显示字数统计 | boolean | ———— | false |

<style>
.g-input {
  margin: 8px 0;
}
</style>