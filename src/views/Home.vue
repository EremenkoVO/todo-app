<template>
  <div class="home">
    <Sidebar>
      <button type="button" class="btn btn-success btn-block" @click="createList">
        + Добавить список
      </button>
      <InputCreate v-model="showCreateListTasks" @create="addTask" />
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
    <Body :active-list-tasks="titleList"></Body>
  </div>
</template>

<script>
import Sidebar from "@/components/layouts/Sidebar.vue";
import Body from "@/components/layouts/Body.vue";
import InputCreate from "@/components/UI/InputCreate.vue";

export default {
  name: "Home",
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
      },
    ],
    tasksList: {
      0: [],
    },
    showCreateListTasks: false,
    activeList: "0",
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
    addTask(data) {
      this.list.push(data);
    },
    activedList(index) {
      this.activeList = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  font-family: "Roboto", sans-serif;
  color: #595959;
  box-sizing: border-box;
  padding: 89px 15px 10px 385px;
  min-height: calc(100% - 39px);

  .list-tasks {
    margin-top: 15px;
  }
}
</style>
