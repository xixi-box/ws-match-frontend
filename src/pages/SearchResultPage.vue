<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";

const route = useRoute()
const userList = ref([])
import myAxios from "../plugins/myAxios.ts";

import qs from "qs";
import {Toast} from "vant";

const {tags} = route.query
onMounted(async () => {

  const userListData = await myAxios.get('/user/search/tags', {
    params: {
      tagNameList: tags
    },
    paramsSerializer: params => {
      return qs.stringify(params, {indices: false})
    }
  }).then(function (response) {
    console.log('/user/search/tags', response);
    console.log('请求成功')
    return response.data?.data;
  }).catch(function (error) {
    console.error('/user/search/tags', error);
  })
  console.log("----------------")
  console.log(userListData)
  if (userListData) {
    userListData.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags)
      }
    })
    userList.value = userListData;
  }

})


const mockUser = {
  id: 1,
  username: '张三',
  userAccount: 123,
  profile: '个人简介',
  avatarUrl: 'https://img9.doubanio.com/icon/ul182680303-4.jpg',
  gender: 0,
  phone: '123456',
  email: '260@163.com',
  userRoles: 0,
  tags: ['java', 'python', 'c++'],
  createTime: new Date,
}

</script>

<template>
  <van-card
      v-for="user in userList"
      :desc="user.profile"
      :title="user.username"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="primary" v-for="tag in user.tags" style="margin-right: 8px ;margin-top:8px">{{ tag }}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
<van-empty v-if="!userList||userList.length<1" description="搜索结果为空"></van-empty>
</template>

<style scoped>

</style>