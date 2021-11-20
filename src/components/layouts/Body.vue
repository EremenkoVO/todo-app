<template>
  <div class="list">
    <div class="header">
      <label class="label-list">{{ activeListTasks }}</label>
      <button type="button" class="btn btn-success" @click="showInputTask">
        + Добавить задачу
      </button>
    </div>
    <InputCreate v-model="showCreateTasks" placeholder="Название задачи" @create="addTask" />
    <div class="list-tasks">
      <div v-for="item in modelValue.tasks" :key="item.id" class="task">
        <input type="checkbox" class="custom-checkbox" :id="item.id" v-model="item.checked" />
        <label :for="item.id">{{ item.name }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import InputCreate from "@/components/UI/InputCreate.vue";
export default {
  name: "Body",
  components: {
    InputCreate,
  },
  props: {
    modelValue: {
      type: Object,
      default: () => {},
    },
    activeListTasks: {
      type: String,
      default: () => {},
    },
  },
  data: () => ({
    showCreateTasks: false,
  }),
  methods: {
    showInputTask() {
      this.showCreateTasks = !this.showCreateTasks;
    },
    addTask(data) {
      data.checked = false;
      this.$emit("add-task", data);
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  .header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
  }
}

.list-tasks {
  margin-top: 20px;
}

.task {
  label {
    font-size: 26px;
  }
}

@media screen and (min-width: 900px) {
  .list {
    padding-left: 290px;
  }

  .label-list {
    font-family: "Roboto-Bold";
    font-size: 26px;
  }
}

@media screen and (min-width: 1200px) {
  .list {
    padding-left: 390px;
  }

  .label-list {
    font-family: "Roboto-Bold";
    font-size: 36px;
  }

  .task {
    label {
      font-size: 26px;
    }
  }
}
</style>
