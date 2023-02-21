import React from 'react'
import '../ItemListContainer/styles.css'
import { mockedProducts } from '../Utils/Products'
import { fetchCopyDrinks } from '../Utils/FetchCopyDrinks'
import { useState } from 'react'
import { useEffect } from 'react'
import ItemList from '../ItemList/ItemList'

function ItemListContainer(children) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetchCopyDrinks(mockedProducts).then((result) => 
      setProducts(result));
 
    }, [])

    useEffect(() => {
     console.log(products)
      
  }, [products])


  return (
    <div className='section-itemListContainer '>
        <ItemList  products= {products} />
    </div>
  )
}

export default ItemListContainer