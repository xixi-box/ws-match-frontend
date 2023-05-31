<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";

const route = useRoute()
const userList = ref([])
import myAxios from "../plugins/myAxios.ts";
import UserCardList from "../components/UserCardList.vue";

onMounted(async () => {

  const userListData = await myAxios.get('/user/recommend', {
    params: {
      pageSize: 8,
      pageNum: 1,
    },
  }).then(function (response) {
    console.log('/user/recommend 成功', response);
    return response?.data?.records;
  }).catch(function (error) {
    console.error('/user/recommend  失败', error);
  })
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
</script>

<template>
  <user-card-list :user-list="userList"></user-card-list>
  <van-empty v-if="!userList||userList.length<1" description="数据为空"></van-empty>
</template>

<style scoped>

</style>