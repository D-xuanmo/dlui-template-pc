<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- 更多全局配置参考：https://www.xuanmo.xin/-/dl-ui/comp-common/config-provider -->
  <d-config-provider client-type="PC" label-width="80px" :round="false">
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
      <a href="https://www.xuanmo.xin/-/dl-ui" target="_blank">
        <img src="https://upyun.xuanmo.xin/logo/dl-ui.svg" class="logo dlui" alt="Vue DLUI" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue + DLUI" />
  </d-config-provider>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.dlui:hover {
  filter: drop-shadow(0 0 2em #1890ff);
}
</style>
