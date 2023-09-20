// vite.config.ts
import { defineConfig } from "file:///C:/Users/izawa/Documents/Freela/Osteomed/OSTEOMED/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/izawa/Documents/Freela/Osteomed/OSTEOMED/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///C:/Users/izawa/Documents/Freela/Osteomed/OSTEOMED/node_modules/vite-plugin-svgr/dist/index.mjs";
import * as path from "path";
var __vite_injected_original_dirname = "C:\\Users\\izawa\\Documents\\Freela\\Osteomed\\OSTEOMED";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxpemF3YVxcXFxEb2N1bWVudHNcXFxcRnJlZWxhXFxcXE9zdGVvbWVkXFxcXE9TVEVPTUVEXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxpemF3YVxcXFxEb2N1bWVudHNcXFxcRnJlZWxhXFxcXE9zdGVvbWVkXFxcXE9TVEVPTUVEXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9pemF3YS9Eb2N1bWVudHMvRnJlZWxhL09zdGVvbWVkL09TVEVPTUVEL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHN2Z3IgZnJvbSAndml0ZS1wbHVnaW4tc3Zncic7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBzdmdyKCldLFxyXG4gIHRlc3Q6IHtcclxuICAgIGdsb2JhbHM6IHRydWUsXHJcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcclxuICAgIHNldHVwRmlsZXM6IFsnLi8udGVzdC9zZXR1cC50cyddLFxyXG4gICAgaW5jbHVkZTogWycqKi8oKi4pP3t0ZXN0LHNwZWN9LntqcyxtanMsY2pzLHRzLG10cyxjdHMsanN4LHRzeH0nXSxcclxuICAgIGV4Y2x1ZGU6IFsnbm9kZV9tb2R1bGVzJywgJ2Rpc3QnLCAnLmlkZWEnLCAnLmdpdCcsICcuY2FjaGUnXSxcclxuICB9LFxyXG4gIHJvb3Q6ICcuLycsXHJcbiAgYnVpbGQ6IHtcclxuICAgIG91dERpcjogJy4vZGlzdCcsXHJcbiAgfSxcclxuICByZXNvbHZlOntcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJyA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxyXG4gICAgICAnQGNvbXBvbmVudHMnIDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2NvbXBvbmVudHMnKSxcclxuICAgICAgJ0Bjb250ZXh0JyA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb250ZXh0JyksXHJcbiAgICAgICdAbW9kZWxzJyA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9tb2RlbHMnKSxcclxuICAgICAgJ0BwYWdlcycgOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvcGFnZXMnKSxcclxuICAgICAgJ0BzdHlsZXMnIDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3N0eWxlcycpLFxyXG4gICAgICAnQGFzc2V0cycgOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvYXNzZXRzJyksXHJcbiAgICAgICdAcm91dGVzJyA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9yb3V0ZXMnKSxcclxuICAgICAgJ0B1dGlscycgOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvdXRpbHMnKSxcclxuICAgICAgJ0Btb2NrJyA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9tb2NrJylcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixZQUFZLFVBQVU7QUFKdEIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFBQSxFQUN6QixNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixZQUFZLENBQUMsa0JBQWtCO0FBQUEsSUFDL0IsU0FBUyxDQUFDLHFEQUFxRDtBQUFBLElBQy9ELFNBQVMsQ0FBQyxnQkFBZ0IsUUFBUSxTQUFTLFFBQVEsUUFBUTtBQUFBLEVBQzdEO0FBQUEsRUFDQSxNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsU0FBUTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsS0FBVyxhQUFRLGtDQUFXLE9BQU87QUFBQSxNQUNyQyxlQUFxQixhQUFRLGtDQUFXLGtCQUFrQjtBQUFBLE1BQzFELFlBQWtCLGFBQVEsa0NBQVcsZUFBZTtBQUFBLE1BQ3BELFdBQWlCLGFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ2xELFVBQWdCLGFBQVEsa0NBQVcsYUFBYTtBQUFBLE1BQ2hELFdBQWlCLGFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ2xELFdBQWlCLGFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ2xELFdBQWlCLGFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ2xELFVBQWdCLGFBQVEsa0NBQVcsYUFBYTtBQUFBLE1BQ2hELFNBQWUsYUFBUSxrQ0FBVyxZQUFZO0FBQUEsSUFDaEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
