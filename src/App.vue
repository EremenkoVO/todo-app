<template>
  <Sidebar>
    <button class="btn btn-default btn-block">Добавить список</button>
  </Sidebar>
  <router-view />
</template>

<script>
import Sidebar from "./components/layouts/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
};
</script>
