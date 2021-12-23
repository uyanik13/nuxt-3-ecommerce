import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      consola: (msg: string) => {
        console.log(`[MY CONSOLE] ${msg}`);
      },
    },
  };
});
