import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import { Test } from '.';

export default {
  title: 'Test',
};

export const hello = () => <Test message={text('message', 'Hello')} onClick={action('Test')} />;
