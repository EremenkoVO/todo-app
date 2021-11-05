<template>
  <transition name="fade">
    <div class="input-create" v-show="modelValue">
      <input
        type="text"
        class="input-control"
        v-model="nameTask"
        :placeholder="placeholder"
        @keydown.enter="createTasks"
        @keydown.esc="close"
      />
    </div>
  </transition>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "InputCreate",
  props: {
    modelValue: {
      type: Boolean,
      require: true,
    },

    placeholder: {
      type: String,
      default: "Название списка",
    },
  },
  data: () => ({
    nameTask: "",
  }),
  methods: {
    close() {
      this.nameTask = "";
      this.$emit("update:modelValue", !this.modelValue);
    },

    createTasks() {
      this.$emit("create", { id: uuidv4(), name: this.nameTask });
      this.close();
    },
  },
};
</script>

<style lang="scss" scoped>
.input-create {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 15px;

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
