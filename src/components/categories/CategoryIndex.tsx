import React from 'react'
import CategoryBurger from './CategoryBurger';
import CategoryView from './CategoryView';
const CategoryIndex = () => {
    const [categoryOpen, setCategoryOpen] = React.useState(false);
    const toggleCategory = () => setCategoryOpen(!categoryOpen);
    return (
        <div>
            {categoryOpen && <CategoryView toggleCategory={toggleCategory} />}
            <CategoryBurger
                toggleCategory={toggleCategory}
                categoryOpen={categoryOpen}
            />
        </div>
    )
}

export default CategoryIndex