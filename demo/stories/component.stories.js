import { action } from '@storybook/addon-actions';
import Component from '../src/Component.svelte';

export default {
  title: 'Component',
  component: Component
};

export const basic = () => ({
  Component: Component,
  props: { bg: 'blue' }
  // on: { click: action('clicked') }
});
