import type { Plugin } from 'vite';

const ENTRY_FILE_NAME = 'init-dayjs-vite-plugin-entry.js';

export interface Options {
  preset?: string;
  plugins?: string[];
  replaceMoment?: boolean;
}

export default function antdDayjs(
  options: Options = { preset: 'antd' },
): Plugin {
  const { plugins, replaceMoment } = new (require('antd-dayjs-webpack-plugin'))(
    options,
  ) as { plugins: string[]; replaceMoment: boolean };

  return {
    name: 'antd-dayjs-vite-plugin',

    config(config) {
      return replaceMoment === true
        ? {
            ...config,
            resolve: {
              ...config.resolve,
              alias: {
                ...config.resolve?.alias,
                moment: 'dayjs',
              },
            },
          }
        : config;
    },

    transformIndexHtml(html) {
      const segments = html.split('<body>');
      return segments.join(
        `<body><script type="module" src="/${ENTRY_FILE_NAME}"></script>`,
      );
    },

    load(this, id) {
      if (id.endsWith(ENTRY_FILE_NAME)) {
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
