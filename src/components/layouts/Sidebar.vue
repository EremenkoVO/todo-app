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
  z-index: 2;
  top: 0;
  left: 0;
  margin: 0;
  padding: 15px;
  background-color: #f1f4f7;
  position: fixed;
  float: left;
  height: 100%;
  overflow: auto;
}

@media screen and (min-width: 900px) {
  .sidebar {
    width: 250px;
  }
}

@media screen and (min-width: 1200px) {
  .sidebar {
    width: 350px;
  }
}
</style>
