import type { Plugin } from 'vite';
// @ts-ignore
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';

const ENTRY_FILE_NAME = 'init-dayjs-vite-plugin-entry';

export interface Options {
  preset?: string;
  plugins?: string[];
  replaceMoment?: boolean;
}

export default function antdDayjs(
  options: Options = { preset: 'antd' },
): Plugin {
  const { plugins, replaceMoment } = new AntdDayjsWebpackPlugin(options) as {
    plugins: string[];
    replaceMoment: boolean;
  };

  return {
    name: 'antd-dayjs-vite-plugin',

    config() {
      if (replaceMoment === true) {
        return {
          resolve: {
            alias: {
              moment: 'dayjs',
            },
          },
        };
      }
    },

    transformIndexHtml: {
      enforce: 'pre',
      transform: () => {
        return [
          {
            tag: 'script',
            attrs: {
              type: 'module',
              src: ENTRY_FILE_NAME,
            },
            injectTo: 'body-prepend',
          },
        ];
      },
    },

    resolveId(id) {
      if (id.endsWith(ENTRY_FILE_NAME)) {
        return ENTRY_FILE_NAME;
      }
    },

    load(this, id) {
      if (id === ENTRY_FILE_NAME) {
        let code = `import * as dayjs from 'dayjs/dayjs.min';`;

        plugins.forEach((plugin) => {
          code += `import ${plugin} from 'dayjs/plugin/${plugin}';`;
        });
        code += `import antdPlugin from 'antd-dayjs-vite-plugin/dist-src/antd-plugin';`;

        plugins.forEach((plugin) => {
          code += `dayjs.extend(${plugin});`;
        });
        code += `dayjs.extend(antdPlugin);`;

        return code;
      }
    },
  };
}
