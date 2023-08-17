import { fileURLToPath, URL } from "node:url"
import Components from "unplugin-vue-components/vite"
import { VantResolver } from "unplugin-vue-components/resolvers"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig( {
  plugins: [
    vue(),
    Components( {
      resolvers: [ VantResolver() ]
    } ),
    require( "tailwindcss" ),
    require( "autoprefixer" )
  ],
  resolve: {
    alias: {
      "@": fileURLToPath( new URL( "./src", import.meta.url ) )
    }
  },
  css: {
    postcss: {
      plugins: [
          require('postcss-pxtorem')({
            rootValue: 192,
            unitPrecision: 5,
            propList: ['*'],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
            exclude: /node_modules/i
          })
      ]
    }
  }
} )