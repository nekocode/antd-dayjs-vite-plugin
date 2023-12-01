import { defineConfig } from 'vite';
import { antdDayjs } from 'antd-dayjs-vite-plugin';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), antdDayjs()],
});
