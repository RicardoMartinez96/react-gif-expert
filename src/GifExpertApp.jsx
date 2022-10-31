import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {
        if(categories.find(x => x.toLowerCase() === newCategory.toLowerCase()) !== undefined) return;

        setCategories([newCategory, ...categories]);
    }

    return (
    <>
        <h1>GifExpert App</h1>

        <AddCategory 
            onNewCategory={ (value)  => onAddCategory(value) }
        />
        {
            categories.map(category => <GifGrid key={category} category={category} />)
        }
    </>
    )
}
