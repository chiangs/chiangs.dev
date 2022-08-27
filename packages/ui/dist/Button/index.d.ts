import { ButtonHTMLAttributes } from 'react';
/**
 * Should be extended by a common component.
 * Not to be exposed to routes as a standalone component.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    clickHandler: () => any;
    variant?: 'primary' | 'alt' | 'cta';
    type?: 'submit' | 'reset' | 'button' | undefined;
    label?: string;
    isDisabled?: boolean;
    customClasses?: string[];
    value?: string | ReadonlyArray<string> | number | undefined;
}
export declare const Button: React.FC<ButtonProps>;
//# sourceMappingURL=index.d.ts.map