import { defineStore } from 'pinia';

export const useBlogStore = defineStore({
  id: 'blog',
  state: () => ({
    blog: {} as Blog,
  }),
  actions: {
    setDescription(value: Blog) {
      this.blog = value;
    },
  },
});