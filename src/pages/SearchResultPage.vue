<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute()
const {tags} = route.query

const userList = ref<>([mockUser])
const mockUser = {
  id: 1,
  username: '张三',
  userAccount: 123;
  avatarUrl: 'https://img9.doubanio.com/icon/ul182680303-4.jpg',
  gender: 0,
  phone: '123456',
  email: '260@163.com',
  userRoles: 0,
  tags: ['java', 'python'],
  createTime: new Date,
}
</script>

<template>
  <van-card
      v-for="user in userList"
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
  >
    <template #tags>
      <van-tag plain type="primary">标签</van-tag>
      <van-tag plain type="primary">标签</van-tag>
    </template>
    <template #footer>
      <van-button size="mini">按钮</van-button>
      <van-button size="mini">按钮</van-button>
    </template>
  </van-card>
</template>

<style scoped>

</style>