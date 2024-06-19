import { StorybookConfig } from 'storybook-react-rsbuild'

const config: StorybookConfig = {
  framework: 'storybook-react-rsbuild',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  rsbuildFinal: (config) => {
    // Customize the final Rsbuild config here
    return config;
  },
};

export default config;