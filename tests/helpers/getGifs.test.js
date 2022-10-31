import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en GetGifs', () => { 
    test('should return gifs array', async () => { 
        const gifs = await getGifs('Elden Ring');
        // console.log(gifs);
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
     });
});