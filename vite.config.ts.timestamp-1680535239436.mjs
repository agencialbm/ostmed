// vite.config.ts
import { defineConfig } from "file:///C:/Users/jhonn/Desktop/Nova%20pasta/OSTEOMED/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/jhonn/Desktop/Nova%20pasta/OSTEOMED/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///C:/Users/jhonn/Desktop/Nova%20pasta/OSTEOMED/node_modules/vite-plugin-svgr/dist/index.mjs";
import * as path from "path";
var __vite_injected_original_dirname = "C:\\Users\\jhonn\\Desktop\\Nova pasta\\OSTEOMED";
var vite_config_default = defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./.test/setup.ts"],
    include: ["**/(*.)?{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: ["node_modules", "dist", ".idea", ".git", ".cache"]
  },
  root: "./",
  build: {
    outDir: "./dist"
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      "@components": path.resolve(__vite_injected_original_dirname, "./src/components"),
      "@context": path.resolve(__vite_injected_original_dirname, "./src/context"),
      "@models": path.resolve(__vite_injected_original_dirname, "./src/models"),
      "@pages": path.resolve(__vite_injected_original_dirname, "./src/pages"),
      "@styles": path.resolve(__vite_injected_original_dirname, "./src/styles"),
      "@assets": path.resolve(__vite_injected_original_dirname, "./src/assets"),
      "@routes": path.resolve(__vite_injected_original_dirname, "./src/routes"),
      "@utils": path.resolve(__vite_injected_original_dirname, "./src/utils"),
      "@mock": path.resolve(__vite_injected_original_dirname, "./src/mock")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqaG9ublxcXFxEZXNrdG9wXFxcXE5vdmEgcGFzdGFcXFxcT1NURU9NRURcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGpob25uXFxcXERlc2t0b3BcXFxcTm92YSBwYXN0YVxcXFxPU1RFT01FRFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvamhvbm4vRGVza3RvcC9Ob3ZhJTIwcGFzdGEvT1NURU9NRUQvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgc3ZnciBmcm9tICd2aXRlLXBsdWdpbi1zdmdyJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgc3ZncigpXSxcbiAgdGVzdDoge1xuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgc2V0dXBGaWxlczogWycuLy50ZXN0L3NldHVwLnRzJ10sXG4gICAgaW5jbHVkZTogWycqKi8oKi4pP3t0ZXN0LHNwZWN9LntqcyxtanMsY2pzLHRzLG10cyxjdHMsanN4LHRzeH0nXSxcbiAgICBleGNsdWRlOiBbJ25vZGVfbW9kdWxlcycsICdkaXN0JywgJy5pZGVhJywgJy5naXQnLCAnLmNhY2hlJ10sXG4gIH0sXG4gIHJvb3Q6ICcuLycsXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiAnLi9kaXN0JyxcbiAgfSxcbiAgcmVzb2x2ZTp7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJyA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgICAgJ0Bjb21wb25lbnRzJyA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb21wb25lbnRzJyksXG4gICAgICAnQGNvbnRleHQnIDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2NvbnRleHQnKSxcbiAgICAgICdAbW9kZWxzJyA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9tb2RlbHMnKSxcbiAgICAgICdAcGFnZXMnIDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3BhZ2VzJyksXG4gICAgICAnQHN0eWxlcycgOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvc3R5bGVzJyksXG4gICAgICAnQGFzc2V0cycgOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvYXNzZXRzJyksXG4gICAgICAnQHJvdXRlcycgOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvcm91dGVzJyksXG4gICAgICAnQHV0aWxzJyA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy91dGlscycpLFxuICAgICAgJ0Btb2NrJyA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9tb2NrJylcbiAgICB9XG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsWUFBWSxVQUFVO0FBSnRCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQUEsRUFDekIsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWSxDQUFDLGtCQUFrQjtBQUFBLElBQy9CLFNBQVMsQ0FBQyxxREFBcUQ7QUFBQSxJQUMvRCxTQUFTLENBQUMsZ0JBQWdCLFFBQVEsU0FBUyxRQUFRLFFBQVE7QUFBQSxFQUM3RDtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLEtBQVcsYUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDckMsZUFBcUIsYUFBUSxrQ0FBVyxrQkFBa0I7QUFBQSxNQUMxRCxZQUFrQixhQUFRLGtDQUFXLGVBQWU7QUFBQSxNQUNwRCxXQUFpQixhQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUNsRCxVQUFnQixhQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUNoRCxXQUFpQixhQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUNsRCxXQUFpQixhQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUNsRCxXQUFpQixhQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUNsRCxVQUFnQixhQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUNoRCxTQUFlLGFBQVEsa0NBQVcsWUFBWTtBQUFBLElBQ2hEO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
