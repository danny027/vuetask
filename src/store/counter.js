// store/counter.ts

import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
    users: [
      {
        id: 1,
        firstName: "user",
        lastName: "one",

        image: "https://robohash.org/hicveldicta.png",
      },
      {
        id: 2,
        firstName: "user",
        lastName: "Two",

        image: "https://robohash.org/doloremquesintcorrupti.png",
      },
      {
        id: 3,
        firstName: "user",
        lastName: "Three",

        image: "https://robohash.org/consequunturautconsequatur.png",
      },
      {
        id: 4,
        firstName: "user",
        lastName: "Four",

        image: "https://robohash.org/facilisdignissimosdolore.png",
      },
      {
        id: 5,
        firstName: "user",
        lastName: "Five",

        image: "https://robohash.org/adverovelit.png",
      },
      {
        id: 6,
        firstName: "user",
        lastName: "Six",

        image: "https://robohash.org/laboriosamfacilisrem.png",
      },
      {
        id: 7,
        firstName: "user",
        lastName: "Seven",

        image: "https://robohash.org/cupiditatererumquos.png",
      },
      {
        id: 8,
        firstName: "user",
        lastName: "Eight",

        image: "https://robohash.org/quiaharumsapiente.png",
      },
      {
        id: 9,
        firstName: "user",
        lastName: "Nine",

        image: "https://robohash.org/excepturiiuremolestiae.png",
      },
      {
        id: 10,
        firstName: "user",
        lastName: "Ten",

        image: "https://robohash.org/aliquamcumqueiure.png",
      },
      {
        id: 11,
        firstName: "user",
        lastName: "Eleven",

        image: "https://robohash.org/impeditautest.png",
      },
      {
        id: 12,
        firstName: "user",
        lastName: "Twelve",

        image: "https://robohash.org/namquaerataut.png",
      },

      {
        id: 13,
        firstName: "user",
        lastName: "thirteen",

        image: "https://robohash.org/voluptatemsintnulla.png",
      },
      {
        id: 14,
        firstName: "user",
        lastName: "fourteen",

        image: "https://robohash.org/quisequienim.png",
      },
      {
        id: 15,
        firstName: "user",
        lastName: "fifteen",

        image: "https://robohash.org/autquiaut.png",
      },
    ],

    messages: {
      user1: ["Good morning user one"],
      user2: ["Good morning user two"],
      user3: ["Good morning user three"],
      user4: ["Good morning user four"],
      user5: ["Good morning user fiv"],
      user6: ["Good morning user six"],
      user7: ["Good morning user seven"],
      user8: ["Good morning user eight"],
      user9: ["Good morning user nine"],
      user10: ["Good morning user ten"],
      user11: ["Good morning user eleven"],
      user12: ["Good morning user twelve"],
      user13: ["Good morning user thirteen"],
      user14: ["Good morning user fourteen"],
      user15: ["Good morning user fifteen"],
    },
  }),
  actions: {
    increment() {
      this.count++;
    },
    addMessage(user, newMsg) {
      this.messages[user].push(newMsg);
    },
    setuser(user) {
      this.users = user;
    },
  },
});
