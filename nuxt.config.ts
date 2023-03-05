// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@nuxt/image-edge", "@pinia/nuxt", "nuxt-icon"],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  runtimeConfig: {
    env: "",
  },
  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    html: {
      minify: {
        removeRedundantAttributes: false,
      },
    },
    postcss: {
      plugins: {
        "postcss-normalize": {},
      },
    },
    extend(config, ctx) {
      // update test for images & consider as images only files from folder assets/images/*
      config.module.rules
        .filter((r) => r.test.toString().includes("svg"))
        .forEach((r) => {
          r.test = /images\/.*\.(png|jpe?g|gif|svg)$/;
        });
      // loader for inline svg from folder assets/icons/*
      config.module.rules.push({
        test: /icons\/.*\.svg$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env"]],
              compact: false,
            },
          },
          {
            loader: "vue-svg-loader",
            options: {
              // optional [svgo](https://github.com/svg/svgo) options
              svgo: {
                plugins: [
                  { removeDoctype: true },
                  { removeComments: true },
                  { removeViewBox: false },
                  { removeTitle: true },
                ],
              },
            },
          },
        ],
      });
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
});
