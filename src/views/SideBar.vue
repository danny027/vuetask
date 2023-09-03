<template>
  <div class="flex bg-slate-300">
    <div class="flex flex-col h-screen p-3 shadow w-60">
      <div
        class="flex flex-col items-center w-full h-full overflow-hidden text-gray-700 bg-gray-100 rounded"
      >
        <a class="flex items-center w-full px-3 mt-3" href="#">
          <svg
            class="w-8 h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
            />
          </svg>
          <span class="ml-2 text-sm font-bold"></span>
        </a>
        <div class="w-full px-2">
          <div
            class="flex flex-col items-center w-full mt-3 border-t border-gray-300"
          >
            <a
              class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
              href="#"
            >
              <svg
                class="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span class="ml-2 text-sm font-medium">Home</span>
            </a>
            <a
              class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
              href="#"
            >
              <i class="fa-regular fa-gem"></i>
              <span class="ml-2 text-sm font-medium">Product</span>
            </a>
            <a
              class="flex items-center w-full h-12 px-3 mt-2 bg-gray-300 rounded"
              href="#"
            >
              <svg
                class="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="ml-2 text-sm font-medium">Customer List</span>
            </a>
            <a
              class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
              href="#"
            >
              <i class="fa-solid fa-shop"></i>
              <span class="ml-2 text-sm font-medium">Shop</span>
            </a>
          </div>
          <div
            class="flex flex-col items-center w-full mt-2 border-t border-gray-300"
          >
            <a
              class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
              href="#"
            >
              <i class="fa-solid fa-chart-pie"></i>
              <span class="ml-2 text-sm font-medium">Income</span>
            </a>
            <a
              class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
              href="#"
            >
              <i class="fa-solid fa-percent"></i>
              <span class="ml-2 text-sm font-medium">Promote</span>
            </a>
          </div>
        </div>
        <a
          class="flex items-center justify-center w-full h-16 mt-auto bg-gray-200 hover:bg-gray-300"
          href="#"
          ><i class="fa-regular fa-circle-question"></i>
          <span class="ml-2 text-xs font-medium">Help & getting started</span>
        </a>
      </div>
    </div>
    <div class="container mx-auto">
      <AppNavbar></AppNavbar>
      <div class="grid grid-cols-3 md:grid-cols-12 gap-4 my-4">
        <!-- <router-view></router-view> -->
        <div class="col-span-3 md:col-span-12 lg:col-span-3 pd-5">
          <!-- user message table -->
          <div>
            <UserMessageTablePage
              :onCheckboxClick="handleCheckboxClick"
              :handleGetUser="getUser"
            />
          </div>
        </div>
        <!-- user message form -->
        <div class="col-span-9 md:col-span-12 lg:col-span-9 mr-4 bg-white">
          <div>
            <div class="flex flex-row my-4">
              <div class="flex basis-1/4 justify-center items-center">
                <img
                  class="w-10 h-10 rounded-full"
                  :src="this.useDetail.image"
                  alt="Rounded avatar"
                />
              </div>
              <div class="flex basis-1/4 justify-center items-center">
                <p class="text-balck-500 font-semibold">
                  {{ this.useDetail.firstName }} {{ this.useDetail.lastName }}
                </p>
              </div>
              <div class="flex basis-1/4 justify-center items-center">
                <button
                  type="button"
                  class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <i class="fa-solid fa-plus"></i>
                  Follow
                </button>
              </div>
              <div class="flex basis-1/4 justify-center items-center">
                <button
                  type="button"
                  class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Message
                  <i class="fa-solid fa-message"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Chat -->
          <div class="flex px-3.5 mt-4 flex-col justify-between m-2">
            <p
              class="flex justify-start items-center mb-3 mt-3 mx-3 font-semibold"
            >
              Message
            </p>
            <div class="overflow-auto h-24 border rounded-lg">
              <div
                class="text-center mt-3 mx-3"
                v-for="msg in allMessages"
                :key="msg.id"
              >
                <div class="">
                  <p class="text-start">{{ msg }}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Test area -->
          <div class="flex justify-start flex-col my-4 px-3.5">
            <p class="flex justify-start my-4 mx-3 font-semibold">
              Private note
            </p>

            <textarea
              class="w-full h-32 px-3 py-2 border rounded-md"
              v-model="message"
              placeholder="Enter text..."
            ></textarea>
          </div>
          <!-- Email -->
          <div class="flex px-3.5 mt-4 flex-row justify-between">
            <p class="flex justify-start items-center mt-3 mx-3">
              <i class="fa-regular fa-envelope mr-4"></i>abc@gmail.com
            </p>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-blue-700 rounded mx-3"
              :disabled="isSendButtonDisabled"
              @click="sendMessage()"
            >
              Send
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <!-- Icons -->
          <div class="flex justify-start flex-col px-3.5 mt-4">
            <p class="flex justify-start items-center mt-3">
              <i class="fa-brands fa-twitter mx-3 text-2xl"></i>
              <i class="fa-brands fa-instagram mx-3 text-2xl"></i>
              <i class="fa-brands fa-pinterest-p mx-3 text-2xl"></i>
              <i class="fa-brands fa-facebook-f mx-3 text-2xl"></i>
            </p>
          </div>
          <!-- Product Table -->
          <div class="flex justify-start flex-col px-3.5 mt-4">
            <ProductTableVue />
          </div>
        </div>
      </div>
    </div>
    <!-- <UserMessageTablePage /> -->
  </div>
</template>

<script>
import AppNavbar from "./AppNavbar.vue";
import UserMessageTablePage from "../components/UserMessageTable.vue";
import { ref } from "vue";
import { useCounterStore } from "../store/counter";
import ProductTableVue from "../components/ProductTable.vue";

export default {
  // Remove the name property if you're using this component in a route
  // name: "SideBar",
  components: {
    AppNavbar,
    UserMessageTablePage,
    ProductTableVue,
  },
  data() {
    return {
      message: "",
      useDetail: {},
      allMessages: [],
    };
  },
  setup() {
    const counter = useCounterStore();
    let showMenu = ref(false);
    let show = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, show, toggleNav, counter };
  },
  methods: {
    handleCheckboxClick() {
      // This function will be called when a checkbox is clicked in the UserMessageTablePage
      // console.log("Checkbox clicked for:", row);
      // You can perform any actions you need here
    },
    getUser(row) {
      this.useDetail = row;
      this.getAllMessage(`${this.useDetail.firstName}${row.id}`);
      this.message = "";
    },
    getAllMessage(userId) {
      this.allMessages = this.counter.messages[userId];
    },

    sendMessage() {
      let userID = `${this.useDetail.firstName}${this.useDetail.id}`;
      this.counter.addMessage(`${userID}`, this.message);
      this.getAllMessage(`${userID}`);
      this.message = "";
    },
  },
  mounted() {},
  computed: {
    isSendButtonDisabled() {
      return this.message.trim().length === 0;
    },
  },
};
</script>
