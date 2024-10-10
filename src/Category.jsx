import React from 'react'

const Category = ( { category, filterCategories } ) => {
    return (
        <button className='btn' onClick={() => filterCategories( category )}>
            {category}
        </button>
    )
}

export default Category
