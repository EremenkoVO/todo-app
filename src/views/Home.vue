<template>
  <Sidebar>
    <button type="button" class="btn btn-default btn-block" @click="CreateList">
      Добавить список
    </button>
    <div></div>
    <InputCreate />
  </Sidebar>
</template>

<script>
import Sidebar from "@/components/layouts/Sidebar.vue";
import InputCreate from "@/components/UI/InputCreate.vue";

//import { v4 as uuidv4 } from "uuid";

export default {
  name: "Home",
  components: {
    Sidebar,
    InputCreate,
  },
  data: () => ({
    tasksList: [],
    showCreateListTasks: false,
  }),
  methods: {
    CreateList() {
      this.showCreateListTasks = true;
    },
  },
};
</script>
