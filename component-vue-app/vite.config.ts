import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import { ConfigEnv, defineConfig, loadEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	const root = process.cwd();
	const env = loadEnv(mode, root);
	console.log(env.VITE_BASE_URL);
	return {
		plugins: [
			vue(),
			Components({
				resolvers: [VantResolver()]
			})
		],
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url)),
				"@img": fileURLToPath(new URL("./src/assets/img", import.meta.url)),
				"@common-img": fileURLToPath(new URL("./src/assets/common-img", import.meta.url))
			}
		},
		server: {
			host: true,
			proxy: {
				"/api": {
					target: "http://localhost:3000",
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, "")
				}
			}
		},
		css: {
			postcss: {
				plugins: [require("tailwindcss"), require("autoprefixer")]
			}
		}
	};
});
