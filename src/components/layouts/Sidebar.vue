<template>
  <div class="sidebar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>
<style lang="scss" scoped>
.sidebar {
  top: 0;
  left: 0;
  margin: 0;
  padding: 15px;
  width: 250px;
  background-color: #f1f4f7;
  position: fixed;
  height: 100%;
  overflow: auto;
}
</style>
