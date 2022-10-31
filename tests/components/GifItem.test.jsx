import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas <GifItem />', () => {

    const title = 'Margit';
    const url = 'https://estaesunaurldemo/image.jpg';

    test('should match snapshot', () => { 
        const { container } = render(<GifItem title={ title } url={ url } />);
        expect(container).toMatchSnapshot();
     });

    test('should show image with URL and ALT text', () => { 
        render(<GifItem title={ title } url={ url } />);
        // screen.debug();
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });

    test('should show the title in the component', () => { 
        render(<GifItem title={ title } url={ url } />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});