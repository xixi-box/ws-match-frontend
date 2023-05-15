<template>
    <van-nav-bar title="标题" left-text="" left-arrow>
        <template #right>
            <van-icon name="search" size="18"/>
        </template>
    </van-nav-bar>
    <div id="content">
        <template v-if="active===`index`">
        </template>
        <Index/>
        <template v-if="active===`team`">
            <Team/>
        </template>
    </div>
<!--  //定义插槽-->
  <!--    <slot name="content">-->
  <!--        //放置页面-->
  <!--    </slot>-->

    <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item icon="home-o" name="index">主页</van-tabbar-item>
        <van-tabbar-item icon="search" name="team">队伍</van-tabbar-item>
        <van-tabbar-item icon="friends-o" name="user">个人</van-tabbar-item>
    </van-tabbar>


</template>
<script setup lang="ts">
import {showToast} from "vant";
import {ref} from "vue";
import Team from "../pages/Team.vue";
import Index from "../pages/Index.vue";

const active = ref('index');//默认高亮
const onChange = (index) => showToast(`标签 ${index}`);
</script>


<style scoped>

</style>