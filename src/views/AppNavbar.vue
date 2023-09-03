<template>
  <div class="font-sans antialiased" id="app">
    <nav
      class="flex items-center justify-between flex-wrap bg-teal p-6 bg-white h-full"
    >
      <div class="flex items-center flex-no-shrink mr-6 text-black">
        <i class="fa-regular fa-command"></i>
        <div class="relative">
          <input
            type="text"
            placeholder="Search or type a command"
            v-model="searchText"
            class="bg-white h-8 px-8 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          />
          <div class="absolute inset-y-0 left-1 flex items-center pr-3">
            <svg
              class="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-4.78-4.78"
              />
              <circle cx="10.5" cy="10.5" r="7.5" />
            </svg>
          </div>
        </div>
      </div>
      <div class="block sm:hidden">
        <button
          @click="toggle"
          class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-black hover:border-black"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :class="open ? 'block' : 'hidden'"
        class="w-full flex-grow sm:flex sm:items-center sm:w-auto justify-end"
      >
        <div class="text-sm">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-3"
          >
            <i class="fa-solid fa-plus"></i>
            create
          </button>

          <a
            href="#responsive-header"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-black mr-4 text-2xl mx-3"
          >
            <svg
              class="w-6 h-6 stroke-current text-2xl"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
          </a>
          <a
            href="#responsive-header"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-black mx-3"
          >
            <i class="fa-regular fa-bell text-2xl"></i>
          </a>
        </div>
        <div>
          <a
            href="#"
            class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal hover:bg-black mt-4 sm:mt-0 mx-3"
            >Download</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      showMenu: false,
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>
