<template>
  <div>
    <div class="section hide">
      <h1>SFC-JSX</h1>
      <SFCButton></SFCButton>
      <JSXButton></JSXButton>
    </div>
    <div class="section hide">
      <h3>颜色color</h3>
      <GButton class="btn" color="blue">普通按钮</GButton>
      <GButton class="btn" color="green">测试</GButton>
      <GButton class="btn" color="purple">提交</GButton>
      <GButton class="btn" color="yellow">修改</GButton>
      <GButton class="btn" color="indigo">Hello World!</GButton>
      <GButton class="btn" color="red">删除</GButton>

      <h3>图标icon</h3>
      <GButton class="btn" icon="search"></GButton>
      <GButton class="btn" icon="edit">编辑</GButton>
      <GButton class="btn" icon="check">修改</GButton>
      <GButton class="btn" icon="message"></GButton>

      <h3>尺寸size</h3>
      <GButton class="btn" size="small" disabled>普通按钮</GButton>
      <GButton class="btn" size="medium">普通按钮</GButton>
      <GButton class="btn" size="large">普通按钮</GButton>
      <GButton class="btn" icon="search" size="small">普通按钮</GButton>
      <GButton class="btn" icon="search" size="medium">普通按钮</GButton>
      <GButton class="btn" icon="search" size="large">普通按钮</GButton>

      <h3>圆角round</h3>
      <GButton class="btn" color="blue" round>普通</GButton>
      <GButton class="btn" color="green" round>普通按钮</GButton>
      <GButton class="btn" color="yellow" round>按钮</GButton>
      <GButton class="btn" color="red" round>普通按钮</GButton>
      <GButton class="btn" color="purple" round>按钮</GButton>
      <GButton class="btn" color="gray" round>普通按钮</GButton>

      <h3>朴素plain</h3>
      <GButton class="btn" color="blue" plain disabled>普通</GButton>
      <GButton class="btn" color="green" plain>普通按钮</GButton>
      <GButton class="btn" color="yellow" plain>按钮</GButton>
      <GButton class="btn" color="red" round plain>普通按钮</GButton>
      <GButton class="btn" color="purple" size="small" plain>按钮</GButton>
      <GButton class="btn" color="gray" size="large" plain>普通按钮</GButton>
    </div>
    <div class="section hide">
      <h3>链接颜色</h3>
      <GLink class="link" href="http://www.baidu.com" target="_blank">
        默认链接
      </GLink>
      <GLink class="link" color="blue">主要链接</GLink>
      <GLink class="link" color="green">成功链接</GLink>
      <GLink class="link" color="yellow">警告链接</GLink>
      <GLink class="link" color="red">危险链接</GLink>
      <GLink class="link" color="gray">信息链接</GLink>
      <GLink class="link" color="purple">链接</GLink>

      <h3>图标链接</h3>
      <GLink class="link" icon="search">链接</GLink>
      <GLink class="link" icon="edit">链接</GLink>
      <GLink class="link" icon="check">链接</GLink>
      <GLink class="link" icon="message">链接</GLink>

      <h3>禁用链接</h3>
      <GLink class="link" disabled>链接</GLink>
      <GLink class="link" color="blue" disabled>链接</GLink>
      <GLink class="link" color="green" disabled>链接</GLink>
      <GLink class="link" color="red" disabled>链接</GLink>
      <GLink class="link" color="gray" disabled>链接</GLink>
      <GLink class="link" color="purple" disabled>链接</GLink>

      <h3>有无下划线链接</h3>
      <GLink class="link" :underline="true">有下划线链接</GLink>
      <GLink class="link" :underline="false">无下划线链接</GLink>
      <GLink class="link" color="blue" :underline="false">
        无下划线主要链接
      </GLink>
      <GLink class="link" icon="message" :underline="false">
        无下划线图标链接
      </GLink>
    </div>
    <div class="section hide">
      <h3>布局Row</h3>
      <GRow :gutter="16">
        <span>111</span>
        <span>222</span>
        <span>333</span>
      </GRow>
      <GRow>
        <GCol :span="24">111</GCol>
        <GCol :span="6">222</GCol>
        <GCol :span="6">333</GCol>
        <GCol :span="6">333</GCol>
        <GCol :span="6">333</GCol>
      </GRow>
    </div>
    <div class="section hide">
      <h3>input输入框</h3>
      <GInput placeholder="test" class="input" clearable />
      <GInput disabled class="input" />
      <GInput placeholder="用户名" clearable v-model="msg" class="input" />
      <GInput
        placeholder="请输入密码"
        show-password
        v-model="pwd"
        class="input"
      />
      <GInput placeholder="请输入测试" type="hidden" class="input" />
      <GInput
        placeholder="请输入内容"
        type="textarea"
        clearable
        show-password
        class="input"
        :rows="5"
      />
      <h3>尺寸</h3>
      <GInput size="small" class="input" :max-length="5" />
      <GInput class="input" :max-length="10" v-model="msg" readonly clearable />
      <GInput
        size="large"
        type="textarea"
        class="input"
        clearable
        :max-length="30"
        show-word-limit
      />
    </div>
    <div class="section hide">
      <h3>基础</h3>
      <span>{{ count }}</span>
      <GInputNumber class="input-number" v-model="count"></GInputNumber>
      <GInputNumber :controls="false" class="input-number"></GInputNumber>
      <GInputNumber :step="2" class="input-number"></GInputNumber>
      <GInputNumber :step="2" disabled class="input-number"></GInputNumber>
      <h3>尺寸</h3>
      <GInputNumber :step="10" size="small" class="input-number"></GInputNumber>
      <GInputNumber :step="6" size="medium" class="input-number"></GInputNumber>
      <GInputNumber :step="3" size="large" class="input-number"></GInputNumber>
      <h3>max/min</h3>
      <span>count: {{ count }}&nbsp;&nbsp;</span>
      <GInputNumber v-model="count" :max="10" :min="3" :step="3"></GInputNumber>
    </div>
    <div class="section">
      <h3>基础1——通过指定name、value、label</h3>
      <GRadio v-model="radioModel.radio1" label=" Hello world"></GRadio>
      <p>radio: {{ radioModel.radio }}</p>
      <GRadio :value="radioModel.radio" label="a" name="zm" @input="radioInput">
        1111
      </GRadio>
      <GRadio :value="radioModel.radio" label="b" name="zm" @input="radioInput">
        2222
      </GRadio>
      <h3>基础2——v-model</h3>
      <p>radio2: {{ radioModel.radio2 }}</p>
      <GRadio v-model="radioModel.radio2" label="aaa">选项1</GRadio>
      <GRadio v-model="radioModel.radio2" label="bbb">选项2</GRadio>
      <GRadio v-model="radioModel.radio2" label="ccc">选项3</GRadio>
      <h3>禁用——disabled</h3>
      <GRadio v-model="radioModel.radio3" disabled label="红中">红中🀄️</GRadio>
      <GRadio v-model="radioModel.radio3" label="微风">微风🌬</GRadio>
      <GRadio v-model="radioModel.radio3" disabled label="鸟儿">鸟儿🐦</GRadio>
      <GRadio v-model="radioModel.radio3" label="狮子">狮子🦁️</GRadio>
    </div>
  </div>
</template>

<script lang="ts">
import { SFCButton, JSXButton } from "./entry";
import { ref, reactive } from "vue";
export default {
  name: "App",
  setup() {
    const msg = ref("Hello");
    const pwd = ref("");
    const count = ref<number>(1);
    const radioModel = reactive({
      radio: "a",
      radio1: "",
      radio2: "",
      radio3: "中",
    });

    const radioInput = (val) => {
      radioModel.radio = val;
    };

    return {
      msg,
      pwd,
      count,
      radioModel,
      radioInput,
    };
  },
  components: { SFCButton, JSXButton },
};
</script>

<style scoped>
.section {
  margin: 1rem;
  padding: 1rem 0;
}

.section:nth-child(n + 2) {
  border-top: 0.2rem solid #ccc;
}

.section.hide {
  display: none;
}

.btn,
.link {
  margin: 0 0.5rem;
}

.input,
.input-number {
  margin: 0.5rem 0;
}
</style>
