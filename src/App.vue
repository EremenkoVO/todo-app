<template>
  <div class="home">
    <Sidebar>
      <button type="button" class="btn btn-success btn-block" @click="createList">
        + Добавить список
      </button>
      <InputCreate v-model="showCreateListTasks" @create="addList" />
      <div class="list-tasks">
        <button
          type="button"
          class="btn-link"
          v-for="(item, index) in list"
          :class="{ active: isActive(index) }"
          :key="item.id"
          @click="activedList(index)"
        >
          {{ item.name }}
        </button>
      </div>
    </Sidebar>
    <Body :active-list-tasks="titleList" v-model="list[activeList]" @add-task="addTask"></Body>
  </div>
</template>

<script>
import Sidebar from "@/components/layouts/Sidebar.vue";
import Body from "@/components/layouts/Body.vue";
import InputCreate from "@/components/UI/InputCreate.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    Body,
    InputCreate,
  },
  data: () => ({
    list: [
      {
        id: "0",
        name: "Все задачи",
        tasks: [],
      },
    ],
    showCreateListTasks: false,
    activeList: 0,
  }),
  computed: {
    titleList() {
      return this.list[this.activeList].name;
    },
  },
  methods: {
    isActive(index) {
      return this.activeList == index;
    },
    createList() {
      this.showCreateListTasks = !this.showCreateListTasks;
    },
    addList(data) {
      data.tasks = [];
      this.list.push(data);
    },
    addTask(data) {
      this.list[this.activeList].tasks.push(data);
    },
    activedList(index) {
      this.activeList = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  .list-tasks {
    margin-top: 15px;
  }
}
</style>
