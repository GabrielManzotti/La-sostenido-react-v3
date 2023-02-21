import React from 'react'
import './styles.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import ProductDetailComponent from '../../ProductDetailComponent/ProductDetailComponent'
import ProductDetailCard from '../../ProductDetailCard/ProductDetailCard';
import { fetchCopyDrinksDetail } from '../../Utils/FetchCopyDrinksDetail';
import { mockedProducts } from '../../Utils/Products';
import GraduationDescription from '../../graduationDescription/graduationDescription';
import LargeDescription from '../../LargeDescription/LargeDescription';


const ProductDetail = () => {

  let productoSeleccionado = ""

  const [product, setProducts] = useState({});

  let { id } = useParams();

  console.log(id)

  useEffect(() => {
    fetchCopyDrinksDetail(mockedProducts).then((result) =>
      setProducts(result[id]));
  }, [id])

  return (
    <div className="section-detail">
      <div className='detail-content'>
        <div className='product-detail-card'>
          <ProductDetailCard data={product} />
        </div>
        <div className='product-detail-component'>
          <ProductDetailComponent data={product} />
          <div className='product-charasterstics'>
            <GraduationDescription data={product} />
          </div>
        </div>
      </div>
      <div className='largeDescription-div'>
        <LargeDescription data={product} />
      </div>
    </div>
  )
}

export default ProductDetail