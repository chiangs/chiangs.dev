import type { ComponentMeta } from '@storybook/react';
import { Button as ButtonComponent, ButtonProps } from 'ui';

export default {
    title: 'Atoms/Button',
    component: ButtonComponent,
    argTypes: {
        variant: {
            options: ['cta', 'primary', 'alt'],
        },
        isDisabled: {
            control: 'boolean',
        },
        label: {
            control: 'text',
        },
        type: {
            options: ['button', 'submit', 'reset'],
            control: 'select',
        },
        customClasses: {
            table: {
                disable: true,
            },
        },
        value: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof Button>;

export const Button = (args: ButtonProps) => <ButtonComponent {...args} />;
