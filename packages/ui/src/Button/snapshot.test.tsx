import renderer from 'react-test-renderer';
import { describe, expect, test } from 'vitest';
import { Button } from './index';

describe('Button', () => {
    test('Button component renders correctly', () => {
        const mockClickHandler = () => null;
        const component = renderer.create(
            <Button clickHandler={mockClickHandler} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
