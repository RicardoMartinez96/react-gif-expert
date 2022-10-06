export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=CNjv1XxylE49n58lTLbfKdiVo9zy6ELq&q=${category}&limit=20`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(x => ({
        id: x.id,
        title: x.title,
        url: x.images.downsized_medium.url,

    }));

    return gifs;
}