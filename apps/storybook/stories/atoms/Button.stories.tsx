import type { ComponentMeta } from '@storybook/react';
import { Button } from 'ui';

export default {
    title: 'Atoms/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

export const Template = () => <Button>Button</Button>;
