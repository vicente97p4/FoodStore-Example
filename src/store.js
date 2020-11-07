import {writable} from "svelte/store";

export const foodStore = writable([{
    name: "김치",
    price: "1500",
  },
  {
    name: "보쌈",
    price: "15000",
  },
  {
    name: "삼겹살",
    price: "13000",
  }
]);