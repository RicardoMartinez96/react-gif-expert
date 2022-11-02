import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => { 

    const category = 'Elden Ring';
    
    test('should be show loading text first', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true 
        });

        render(<GifGrid  category={category} />);
        
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('should be show items when get images from useFetchGifs function', () => { 
        
        const gifs = [
            {
            id: 'abc',
            title: 'Elden Ring',
            url: 'https://images/demo.gif'
            },
            {
            id: '123',
            title: 'Saitama',
            url: 'https://images/saitama.gif'
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true 
        });
        
        render(<GifGrid  category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
    });

});