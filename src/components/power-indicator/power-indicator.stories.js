import {text, boolean} from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const MyComponent = () => {
  const isLoading = boolean('Is Loading', true);
  return `<power-indicator isLoading=${isLoading}></power-indicator>`;
};