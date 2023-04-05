<script lang="ts">
import { defineComponent, reactive, ref, toRefs, watch, watchEffect } from 'vue'

// interface Member {
//   id: number
//   name: string
//   age: number
//   gender: string
// }

export default defineComponent({
  setup() {
    // 定义一个 reactive 对象
    const userInfo = reactive({
      id: 1,
      name: 'Petter',
      age: 18,
      gender: 'male',
    })

    const input_data = ref('hello')
    // const idRef = toRef(input_data)

    // 定义一个新的对象，它本身不具备响应性，但是它的字段全部是 Ref 变量
    const userInfoRefs = toRefs(userInfo)

    // 在 2s 后更新 `userInfo`
    setTimeout(() => {
      userInfo.id = 2
      userInfo.name = 'Tom'
      userInfo.age = 20
    }, 2000)

    setTimeout(() => {
      input_data.value = 'world'
    }, 4000)

    watch(userInfoRefs.age, (newValue, oldValue) => {
      console.log(oldValue, '->', newValue)
    })

    const watchUser = () => {
      console.log(userInfoRefs.id) // 只有顶层数据发生变化会导致watchEffect被调用
      console.log(userInfoRefs.name)
      console.log(input_data.value)
    }
    watchEffect(watchUser)

    const msg = ref<string>('Hello World!')

    // 在这里解构 `toRefs` 对象才能继续保持响应性
    return {
      ...userInfoRefs,
      msg,
    }
  },
  directives: {
    // `directives` 下的每个字段名就是指令名称
    highlight: {
      // 钩子函数
      mounted(el, binding) {
        el.style.backgroundColor =
          typeof binding.value === 'string' ? binding.value : 'unset'
      },
    },
  },
})
</script>

<template>
  <ul class="user-info">
    <li class="item">
      <span class="key">ID:</span>
      <span class="value">{{ id }}</span>
    </li>

    <li class="item">
      <span class="key">name:</span>
      <span class="value">{{ name }}</span>
    </li>

    <li class="item">
      <span class="key">age:</span>
      <span class="value">{{ age }}</span>
    </li>

    <li class="item">
      <span class="key">gender:</span>
      <span class="value">{{ gender }}</span>
    </li>

    <li class="item">
      <span>input: </span>
    </li>
    <!-- 这个使用默认值 `unset` -->
    <div v-highlight>{{ msg }}</div>

    <!-- 这个使用传进去的黄色 -->
    <div v-highlight="`yellow`">{{ msg }}</div>
  </ul>
</template>
