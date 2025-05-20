export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  imports: {
    dirs: ["stores", "types", "helpers", "server/services"],
  },

  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui", "@nuxt/test-utils"],
  srcDir: "src/",
});
