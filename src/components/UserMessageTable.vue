<template>
  <div class="flex flex-col bg-white h-85vh overflow-scroll">
    <div class="overflow-x-auto">
      <div
        class="p-1.5 w-full inline-block align-middle h-85vh overflow-hidden"
      >
        <div class="border rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="py-3 pl-4">
                  <div class="flex items-center h-5">
                    <input
                      id="checkbox-all"
                      type="checkbox"
                      class="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                    />
                    <label for="checkbox" class="sr-only"> Checkbox </label>
                  </div>
                </th>

                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                >
                  Name
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr
                v-for="row in this.userList"
                :key="row.id"
                :class="{ 'bg-blue-100': row.isActive }"
              >
                <td class="py-1 pl-4">
                  <div class="flex items-center h-5">
                    <input
                      type="checkbox"
                      class="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      @click="toggleRowActive(row)"
                    />
                    <label for="checkbox" class="sr-only"> Checkbox </label>
                  </div>
                </td>

                <td
                  class="flex px-6 py-4 text-sm text-gray-800 whitespace-nowrap cursor-pointer"
                  @click.stop="handleButtonClick(row)"
                >
                  <img
                    class="w-10 h-10 rounded-full"
                    :src="row.image"
                    alt="Rounded avatar"
                  />
                  <button class="text-blue-600">
                    {{ row.firstName }}
                    {{ row.lastName }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from "../store/counter";

export default {
  name: "UserMessageTablePage",
  props: {
    onCheckboxClick: {
      type: Function,
      required: true,
    },
    handleGetUser: {
      type: Function,
      required: true,
    },
  },
  setup() {
    const counter = useCounterStore();
    return { counter };
  },
  data() {
    return {
      userList: [],
    };
  },
  mounted() {
    this.getAllUser();
  },
  methods: {
    toggleRowActive(row) {
      row.isActive = !row.isActive;
      this.onCheckboxClick(row); // Call the provided callback function
    },
    handleButtonClick(row) {
      this.handleGetUser(row); // Call the correct function
      // console.log("Button clicked for:", row);
      // Perform any actions you need here
    },
    getAllUser() {
      this.userList = this.counter.users;
      this.handleGetUser(this.counter.users[0]);
    },
  },
};
</script>
