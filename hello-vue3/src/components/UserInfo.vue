<script>
import { defineComponent, reactive, toRefs } from 'vue'

interface Member {
  id: number
  name: string
  age: number
  gender: string
}

export default defineComponent({
  setup() {
    // 定义一个 reactive 对象
    const userInfo = reactive({
      id: 1,
      name: 'Petter',
      age: 18,
      gender: 'male',
    })

    // 定义一个新的对象，它本身不具备响应性，但是它的字段全部是 Ref 变量
    const userInfoRefs = toRefs(userInfo)

    // 在 2s 后更新 `userInfo`
    setTimeout(() => {
      userInfo.id = 2
      userInfo.name = 'Tom'
      userInfo.age = 20
    }, 2000)

    // 在这里解构 `toRefs` 对象才能继续保持响应性
    return {
      ...userInfoRefs,
    }
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
  </ul>
</template>
