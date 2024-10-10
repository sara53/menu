import React from 'react'
import Category from './Category'

const Categories = ( { categories, filterCategories } ) => {
    return (
        <div className='btn-container'>
            {categories.map( category => <Category key={category} category={category} filterCategories={filterCategories} /> )}
        </div>
    )
}

export default Categories
