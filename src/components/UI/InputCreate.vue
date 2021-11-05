<template>
  <div class="input-create">
    <input type="text" class="input-control" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: "InputCreate",
  props: {
    placeholder: {
      type: String,
      default: "Название списка",
    },
  },
};
</script>

<style lang="scss" scoped>
.input-create {
  display: flex;
  flex-direction: row;
  margin-top: 15px;

  .input-control {
    padding: 5px;
    width: 100%;
    border: 1px solid var(--default);
    border-radius: 4px;
    color: var(--default);

    &::placeholder {
      color: #d0d6db;
    }
  }
}
</style>
