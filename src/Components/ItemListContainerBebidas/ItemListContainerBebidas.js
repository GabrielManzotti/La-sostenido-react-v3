import React from 'react'
import '../ItemListContainer/styles.css'
import { mockedProducts } from '../Utils/Products'
import { fetchCopyDrinks } from '../Utils/FetchCopyDrinks'
import { useState } from 'react'
import { useEffect } from 'react'
import ItemList from '../ItemList/ItemList'

function ItemListContainer(children) {

    const [products, setProducts] = useState([]);
    const [productsFilter, setproductsFilter] = useState([]);

    useEffect(() => {
        fetchCopyDrinks(mockedProducts).then((result) =>
            setProducts(result));
    }, [])

    useEffect(() => {
        const softDrinks = products.filter(category => category.category === "Soft Drinks");

        setproductsFilter(softDrinks)

    }, [products])


    return (
        <div className='section-itemListContainer '>
            <ItemList products={productsFilter} />
        </div>
    )
}

export default ItemListContainer