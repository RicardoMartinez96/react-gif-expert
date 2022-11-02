import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => { 

    test('should be return initial state', () => { 
        const { result } = renderHook(() => useFetchGifs('Elden Ring'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should be return array images and isLoading false', async () => { 
        const { result } = renderHook(() => useFetchGifs('Elden Ring'));

        //Espera a que continue el proceso hasta cumplir una condicion, en este caso
        //se espera a que sea mayor a 0 el array de images.
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });

})