[![npm](https://img.shields.io/npm/v/antd-dayjs-vite-plugin)](https://www.npmjs.com/package/antd-dayjs-vite-plugin) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/antd-dayjs-vite-plugin)

A Vite port of [antd-dayjs-webpack-plugin](https://github.com/ant-design/antd-dayjs-webpack-plugin). Day.js vite plugin for Ant Design (antd). 

## Usage

Install via `yarn add antd-dayjs-vite-plugin`.

In your `vite.confg.ts`:

```ts
import antdDayjs from 'antd-dayjs-vite-plugin';

export default defineConfig({
  plugins: [/**/, antdDayjs()],
  // ...
}
```

### Configuration

All options are the same as for antd-dayjs-webpack-plugin. Check the **[README](https://github.com/ant-design/antd-dayjs-webpack-plugin#configuration-%E9%85%8D%E7%BD%AE)** of antd-dayjs-webpack-plugin for more details.
