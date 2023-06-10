<script setup lang="ts">
//跳转到
import {useRouter} from "vue-router";

const router = useRouter();
const doJoinTeam = () => {
  router.push({
    path: "/team/add"
  })
}
</script>

<template>
  <div id="teamPage">
    <van-button type="primary" @click=doJoinTeam>加入队伍</van-button>
  </div>

</template>

<style scoped>
#teamPage {

}
</style>