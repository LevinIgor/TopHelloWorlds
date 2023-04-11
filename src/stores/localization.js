import { defineStore } from "pinia";

export const useLocalization = defineStore({
  id: "localization",
  state: () => ({
    language: "en",
    content: {},
  }),
  actions: {
    async changeTo(lang) {
      const data = await import(`@/DB/${lang}.js`);
      this.content = data.default;
    },
  },
});
