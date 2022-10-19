import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { antdDayjs } from '../pkg';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), antdDayjs()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
